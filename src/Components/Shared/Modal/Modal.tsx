"use client";

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  CSSProperties,
} from "react";
import styles from "./Modal.module.scss";

type RenderedModalsType = {
  children: ReactNode;
  key: string;
  style?: CSSProperties;
}[];

type OnModalCloseType = (key: string) => void;

type TriggerRenderModalType = (
  elements: ReactNode,
  key: string,
  style?: CSSProperties
) => void;

const Modal = ({
  id,
  children,
  onClose,
  style = { maxWidth: "500px" },
}: {
  id: string;
  children: ReactNode;
  onClose: () => void;
  style?: CSSProperties;
}) => {
  useEffect(() => {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      setTimeout(() => {
        modalElement.style.opacity = "1";
      }, 1);
    }
    return () => {
      const modalElement = document.getElementById(id);
      if (modalElement) {
        modalElement.style.opacity = "0";
      }
    };
  }, []);

  return (
    <div id={id} className={styles.overlay} onClick={onClose}>
      <div
        id={`${id}-modalContent`}
        style={style}
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ModalContext = createContext<{
  renderedModals: RenderedModalsType;
  onClose: OnModalCloseType;
  renderModal: TriggerRenderModalType;
}>({
  renderedModals: [],
  onClose: () => {},
  renderModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [renderedModals, setRenderedModals] = useState<RenderedModalsType>([]);

  const renderModal: TriggerRenderModalType = (elements, key, style) => {
    setRenderedModals((prev) => [...prev, { children: elements, key, style }]);
  };

  const onClose = (key: string) => {
    const modalId = key;
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.style.opacity = "0";
    }
    setTimeout(() => {
      setRenderedModals((prev) => prev.filter((modal) => modal.key !== key));
    }, 200);

    const topMostContainerElement = document.getElementById("topMostContainer");
    if (topMostContainerElement) {
      topMostContainerElement.style.overflowY = "auto";
    }
  };

  useEffect(() => {
    if (renderedModals.length > 0) {
      const topMostContainerElement =
        document.getElementById("topMostContainer");
      if (topMostContainerElement) {
        topMostContainerElement.style.overflowY = "hidden";
      }
    }
  }, [renderedModals]);

  return (
    <ModalContext.Provider
      value={{
        renderModal,
        renderedModals,
        onClose,
      }}
    >
      {children}
      {renderedModals.map((modal) => {
        return (
          <Modal
            key={modal.key}
            id={modal.key}
            style={modal?.style}
            onClose={() => onClose(modal.key)}
          >
            {modal.children}
          </Modal>
        );
      })}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const { renderedModals, onClose, renderModal } = useContext(ModalContext);

  return { onClose, renderModal, renderedModals };
};
