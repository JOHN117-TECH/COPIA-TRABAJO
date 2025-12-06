import Dropdown from "./Dropdown";
import Checkbox from "../forms/Checkbox";
import { useFilter } from "@/hooks/useFilter";
import { iconChevronDown } from "@/utilities/constants";
import { DropdownCheckProps, Node } from "@/models/filters.model";

/**
 * DropdownCheckOptionFilters component for managing and displaying dropdown options with checkboxes.
 * It allows toggling of main and child options, and displays the count of selected and total items.
 *
 * @param {DropdownCheckProps} props - Component props
 * @param {string} props.name - Name of the main dropdown option
 * @param {object} props.item - Item data for the main option
 * @param {Node[]} props.children - Array of child nodes representing dropdown items
 * @returns {JSX.Element} The rendered DropdownCheckOptionFilters component
 */
const DropdownCheckOptionFilters = ({ name, item, children }: DropdownCheckProps) => {
  const { toggleMarkets, state } = useFilter();

  const toggleMain = () => {
    toggleMarkets (true, item);
  };

  const toggleChild = (section: Node) => {
    toggleMarkets (false, item, section);
  };

  const allChildrenSelected = children.every(child =>
    state.selectedFilters.sectorIds?.some(
      (selected: { sectorId: string }) => selected.sectorId === child.node.id
    )
  );

  const isChildrenSelected = (section: any) => state.selectedFilters.sectorIds?.some((selected: { sectorId: string }) => selected.sectorId === section.node.id);

  return (
    <Dropdown>
      <Dropdown.Toggle
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="py-3 hover:bg-(--aqua-00)"
      >
        <div className="flex items-center space-x-2 pr-4">
          <i className={iconChevronDown}/>
          <Checkbox
            className="font-semibold text-(--select-item-default-text) w-full"
            name={name}
            checked={allChildrenSelected}
            quantity={children.reduce((acc, item) => acc + item.node.patternSet.totalCount, 0)}
            onClick={toggleMain}
          />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children.map((section, idx) => (
          <Dropdown.Item
            key={`dropdown-option-${idx}-${section.node.name}`}
            onClick={() => toggleChild(section.node)}
            className="py-2 pr-4 pl-[25px]"
          >
            <Checkbox
              name={section.node.name}
              checked={isChildrenSelected(section)}
              className="pl-[10px]"
              quantity={section.node.patternSet.totalCount}
              onClick={() => toggleChild(section.node)}
            />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownCheckOptionFilters;
