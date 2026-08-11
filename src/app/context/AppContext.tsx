import { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'get-started' | 'download-app' | null;

interface AppContextValue {
  openGetStarted: () => void;
  openDownloadApp: () => void;
  closeModal: () => void;
  activeModal: ModalType;
}

const AppContext = createContext<AppContextValue>({
  openGetStarted: () => {},
  openDownloadApp: () => {},
  closeModal: () => {},
  activeModal: null,
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <AppContext.Provider value={{
      openGetStarted: () => setActiveModal('get-started'),
      openDownloadApp: () => setActiveModal('download-app'),
      closeModal: () => setActiveModal(null),
      activeModal,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
