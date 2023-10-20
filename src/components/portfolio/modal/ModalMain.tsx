import { FC } from "react";
import ModalOne from "./modal-by-id/ModalOne";
import ModalTwo from "./modal-by-id/ModalTwo";
import ModalThree from "./modal-by-id/ModalThree";

const ModalMain: FC<{ modalId: any, setGetModal: any, slug: string  }> = ({ modalId, setGetModal, slug }) => {
  const newModalId = parseInt(modalId);
  console.log('ModalMain clicked')
  
  if (newModalId === 1) {
    return (
      <ModalOne slug={slug} modalId={newModalId} setGetModal={setGetModal} />
    );
  } else if (newModalId === 2) {
    return (
      <ModalTwo slug={slug} modalId={newModalId} setGetModal={setGetModal}/>
    );
  } else if (newModalId === 3) {
    return (
      <ModalThree slug={slug} modalId={newModalId} setGetModal={setGetModal}/>
    );
  }
};

export default ModalMain;
