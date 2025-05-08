import { useContext, createContext } from "react";
import { updateTerms } from "../api/terms&privacy"; 

export const TermsContext = createContext()

export const useTerms = () => useContext(TermsContext);

export const TermsProvider = ({ children }) => {
 
  const editTerms = async (terms) => {
    const formData = new FormData();
    formData.append("content", terms.content)
    formData.append("date", terms.date)
    
    await updateTerms(formData);

  }

  return (
    <TermsContext.Provider value={{ editTerms }}>
      {children}
    </TermsContext.Provider>
  );
};