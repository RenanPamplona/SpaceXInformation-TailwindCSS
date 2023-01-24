import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

// Usage:
// Wrap the content that will be the popUp with this component
// Pass the popUpState:
//   Here, to close the popUp
//   To the card that contains the object, for it to open the popUp onClick, passing the id

// Setup in the main file:
//  Current popUp state : const [currentPopUp, setCurrentPopUp] = useState<string>("0");
//  Create an object with the property 0 as an empty div, which will be the default popUp
//     const starlinkPopUpObject: any = {0: <div></div>,};
//  Iterate for each object in the array to get a property in that object:
//     the name of the property will be the object id and the value will be this component wrapping the actual popUp element
//       props.starlinkList?.forEach((starlink) => {
//          starlinkPopUpObject[starlink.id] = (
//             <PopUpSetup popUpState={setCurrentPopUp}><StarlinkPopUp/></PopUpSetup>
//           );
//        });

// Inside the return of the component, you'll have:
//   {starlinkPopUpObject[currentPopUp]}
// So when you click a card, it changes the popUpState to the card id
// This makes the correct pop up to be on the screen, and the closeButton will change it to 0 and will close the popUp

/*
<div style={{ position: "relative" }}>
      <S.LowOpacityScreen />
      <S.Wrapper>
        <S.MainContent>{props.children}</S.MainContent>
      </S.Wrapper>
      <S.CloseButton onClick={() => props.popUpState("0")}>
        <FontAwesomeIcon icon={faX} />
      </S.CloseButton>
    </div>
*/

const PopUpSetup = (props: {
  children?: ReactNode;
  popUpState: (string: string) => void;
}) => {
  return <></>;
};

export default PopUpSetup;
