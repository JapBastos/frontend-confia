import Modal from './index';

type BaseModalProps = {
  modalOpen: boolean;
  setModalOpen: () => void;
}

function BaseModal({ setModalOpen, modalOpen }: BaseModalProps) {
  if (!modalOpen) {
    return null;
  }
  return (
    <Modal setOpenModal={setModalOpen} />
  );
}

export default BaseModal;
