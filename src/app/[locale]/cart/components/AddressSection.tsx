import Modal from "@/components/modal/Modal";
import SPGLink from "@/components/Link";
import DeliveryInfo from "./DeliveryInfo";
import ButtonType from "@/models/buttonType";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { getCookie } from "@/hooks/getCookie";
import { Button, ButtonText, ButtonIcon } from "@/components/Button";
import { TokenAuthV2Document } from "@/graphql/auth/login/mutations/tokenAuth.generated";

/**
 * AddressSection component
 *
 * This component renders the address section of the cart, allowing users to view,
 * add, or change their delivery address and provide delivery instructions.
 * It includes conditional rendering based on user login status and manages
 * modal visibility for address input.
 *
 * - Uses `useState` to manage delivery instructions visibility and modal state.
 * - Uses `useEffect` to toggle the visibility of the delivery instructions input field.
 * - Simulates a logged-in user with hardcoded data.
 * - Integrates a dynamic form for address submission using a validation schema.
 *
 * @returns {React.ReactElement} - Rendered address section component
 */

export default function AddressSection() {
  const t = useTranslations("Cart");
  const tl = useTranslations("Login");
  const formId = "Q29udGFjdEZvcm1Ob2RlOjg=";
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    country: "",
    contactNumber: "",
    zipCode: "",
    state: "",
    city: "",
    address: "",
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoggedUser, setIsLoggedUser] = useState<boolean>(false);
  const [deliveryInstructions, setDeliveryInstructions] = useState<boolean>(false);

  useEffect(() => {
    const updateUser = (event?: Event) => {
      const token = getCookie("userToken");
      const userInitials = {
        firstName: "Jhon",
        lastName: "Doe",
        country: "United States",
        contactNumber: "+34 612 345 678",
        zipCode: "28001",
        state: "New Jersey",
        city: "Tinton Falls",
        address: "Cherry Tree Lane 123, Tinton Falls, NJ 07724",
      };

      if (token) {
        setUser(userInitials || "");
        setIsLoggedUser(true);
      } else {
        setUser({
        firstName: "",
        lastName: "",
        country: "",
        contactNumber: "",
        zipCode: "",
        state: "",
        city: "",
        address: "",
      });
        setIsLoggedUser(false);
      }
    };

    updateUser();
    window.addEventListener("authChange", updateUser);

    return () => {
      window.removeEventListener("authChange", updateUser);
    };
  }, []);

  useEffect(() => {
    if (deliveryInstructions) {
      const deliveryInput = document.getElementById("delivery-instructions");
      if (deliveryInput) {
        deliveryInput.style.display = "block";
      }
    } else {
      const deliveryInput = document.getElementById("delivery-instructions");
      if (deliveryInput) {
        deliveryInput.style.display = "none";
      }
    }
  }, [deliveryInstructions]);

  const handleSubmit = (response: any) => {
      console.log({response});
  }

  return (
    <div className="flex flex-col w-full md:w-1/2 text-left px-[10%]">
      {isLoggedUser ? (
        <>
          <div className="w-full flex flex-col border-b-2 border-gray-200 pb-4 mb-4">
            <div className="flex flex-row w-full">
              <p className="text-gray-600 text-xl pb-6">
                {t("deliveryInstructions")}
              </p>
              <p
                className="text-blue-500 cursor-pointer underline ml-auto text-xl pb-6"
                onClick={() => setDeliveryInstructions(!deliveryInstructions)}
              >
                {t("add")} +
              </p>
            </div>
            <input
              type="search"
              id="delivery-instructions"
              className="hidden w-full font-normal p-4 text-sm text-(--spg-text) border border-gray-300 rounded-lg bg-white focus:ring-spg-link focus:border-spg-link"
              placeholder={t("deliveryInstructionsPlaceholder")}
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <p className="text-base text-gray-800 mb-6">
              {t("deliveryAddress")}
            </p>
            <p className="text-base text-gray-800 mb-6">{user.address}</p>
            <Button>
              <ButtonText text={t("requestSamples")} />
            </Button>
            <Button
              design={ButtonType.OUTLINED_BIG}
              onClick={() => setShowModal(true)}
            >
              <ButtonText text={t("changeAddress")} />
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col ">
          <p className="text-gray-600 text-2xl mb-5">
            {t("notLoggedIn")}
          </p>
          <p className="text-base text-gray-400 italic">
            {t("notLoggedInDesc")}
          </p>
          <div className="flex flex-row w-full mt-4">
            <SPGLink 
              path={"/login"}
              className="w-1/2 mr-2"   
            >
              <Button
                design={ButtonType.OUTLINED_BIG}
              >
                <ButtonText text={tl("button")} />
                <ButtonIcon className="text-sm ml-2 ic-arrow-right" />
              </Button>
            </SPGLink>
            <SPGLink 
              path={"/signup"}
              className="w-1/2 ml-2"  
            >
              <Button>
                <ButtonText text={tl("signup")} />
                <ButtonIcon className="text-sm ml-2 ic-arrow-right" />
              </Button>
            </SPGLink>
          </div>
            
          
        </div>
      )}

      <div className="hidden md:block w-full">
        <DeliveryInfo />
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="mt-8 mb-5 text-4xl w-full px-20">{t("addAddress")}</h2>
        <p className="px-20">{t("addAddressDesc")}</p>
        {/* TODO: Poner migración real */}
        <DynamicFormWrapper
          formId={formId}
          formQuery={TokenAuthV2Document}
          onSubmit={handleSubmit} 
          extraVariables={{ instanceId: GetCurrentInstance() }}
          className="bg-white rounded shadow-none md:max-w-4xl w-full px-20 py-10"
        >
          <section className="flex justify-between">
            <Button 
              design={ButtonType.LINK_GREEN_BIG}
              onClick={() => setShowModal(false)} 
            >
              <ButtonText text={t("cancel")}/>
            </Button>
            <Button type="submit">
              <ButtonText text={t("requestSamples")}/>
              <ButtonIcon className="ml-2 ic-arrow-right"/>
            </Button>
          </section>
        </DynamicFormWrapper>
      </Modal>
    </div>
  );
}
