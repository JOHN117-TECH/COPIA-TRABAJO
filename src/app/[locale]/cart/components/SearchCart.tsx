import SearchInput from "@/components/forms/SearchInput";

export default function SearchCart() {
  const handleSearch = (query: string) => {
    console.log("Buscando desde CartEmpty:", query);
  };

  const handleClear = () => {
    console.log("Input limpiado desde CartEmpty");
  };

  return (
    <>
      <SearchInput
        onSearch={handleSearch}
        onClear={handleClear}
        placeholder={"AAA-000"}
        className="border border-(--gray-10) shadow-xs px-3 bg-white"
      />
    </>
  );
}
