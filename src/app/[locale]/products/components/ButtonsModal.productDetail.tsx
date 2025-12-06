import React, { useEffect } from 'react';
import ButtonType from '@/models/buttonType';

import { useTranslations } from 'next-intl';
import { ButtonsModalProps, Color } from '@/models/products.model';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';
import { useModalContext } from '@/components/modal/ModalContext';

/**
 * ButtonsModal component renders two buttons: "Add to cart" and "Go to detail"
 * 
 * @param {ButtonsModalProps} props - Component props
 * @param {PatternResponse} props.product - Product object
 * @param {string} props.selectedColor - Selected color
 * @returns {React.ReactElement} A React component that renders two buttons
 */
const ButtonsModal: React.FC<ButtonsModalProps> = ({ product, selectedColor }) => {
  const t = useTranslations("");
  const { hasFooter, setFooterContent } = useModalContext();
  const buttons = (
    <div className="flex flex-row justify-evenly md:justify-start gap-2 md:border-none pt-2">
      <Button className="order-1 md:order-2" design={ButtonType.LINK_GREEN_SMALL}>
        <ButtonText text={t("Products.goToDetail")} className="underline font-medium" />
        <ButtonIcon className="icon-arrow-right" />
      </Button>
      <Button
        className="font-medium order-2 md:order-1"
        design={ButtonType.OUTLINED_SMALL}
        onClick={() => console.log("Add to cart")}
      >
        <ButtonIcon className="icon-add-shopping-cart text-2xl" />
        <ButtonText text={t("Products.addToCart")} />
      </Button>

    </div>
  );

  useEffect(() => {
    if (hasFooter) {
      setFooterContent(buttons);
      return () => setFooterContent(null);
    }
  }, [hasFooter, selectedColor, product]);

  if (hasFooter) return null;

  return buttons;
};

export default ButtonsModal