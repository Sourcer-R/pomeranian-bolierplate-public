import { useEffect, useState } from 'react';
import { FieldSection } from './FieldSection/FieldSection';
import './styles.css';
import { MainSection } from './MainSection/MainSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';
import Select from 'react-select';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDoc, doc } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return !emailPattern.test(value);
};

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs backend-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptionsList = [
  { fieldName: 'github', label: 'intro GitHub' },
  { fieldName: 'environment', label: 'ustawienie środowiska' },
  { fieldName: 'extraDocs', label: 'materiały dodatkowe' },
];

const requiredFields = [
  'nameAndSurname',
  'email',
  'product',
  'paymentType',
  'consents',
];

export function Forms() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionalOptions: {
      github: true,
      environment: false,
      extraDocs: true,
    },
    nameAndSurname: '',
    email: '',
    details: '',
    consents: false,
  });
  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(false);
    const [isEmailValid, setIsEmailValid] = useState();
  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes(' ')
      : true;
  
  const isFieldValid =
    isEmailValid && isNameAndSurnameValid && isAllRequiredFieldsFilled;

  const [orderId,setOrder] =useState();

useEffect(()=>{
  if(orderId) {
   getDoc(doc(db, 'orders')).then((response)=>{
    console.log(response.data());
   })
  }
}, [orderId])

  function updateAdditionalOptions(fieldName, newValue) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [fieldName]: newValue,
      },
    });
  }


  async function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);

      try {
        const docRef = await addDoc(collection(db, 'orders'), formData);

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }

  function updateFormData(onChangeEvent) {
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  return (
    <>
    <form
      className="container__form"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <MainSection title="ZAMÓWIENIE PRODUKTU">
        <FieldSection title="Wybierz produkt*">
          <Select
            value={productOptions.find(
              (item) => item.value === formData.product
            )}
            options={productOptions}
            onChange={(selectedItem) => {
              setFormData({
                ...formData,
                product: selectedItem.value,
              });
            }}
          />
        </FieldSection>

        <FieldSection title="Wybierz formę płatności*">
          <RadioButtons
            name="paymentType"
            options={paymentTypeOptions}
            value={formData.paymentType}
            onChange={updateFormData}
          />{' '}
        </FieldSection>
        <FieldSection title="Opcje dodatkowe do zamówienia">
          <Checkboxes
            list={additionalOptionsList.map((item) => {
              return {
                ...item,
                isChecked: formData.additionalOptions[item.fieldName],
              };
            })}
            onChange={updateAdditionalOptions}
          />
        </FieldSection>
      </MainSection>

      <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
        <FieldSection title="Imię i nazwisko*">
          <input
            className="input-field__select"
            type="text"
            name="nameAndSurname"
            value={formData.nameAndSurname}
            onChange={updateFormData}
          />{' '}
          {!isNameAndSurnameValid && (
            <p className="input-field-error-message">
              Nie podales imienia i nazwiska!
            </p>
          )}
        </FieldSection>
        <FieldSection title="Adres e-mail*">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={updateFormData}
            className={isEmailValid === false ? 'input-field-error' : ''}
            onBlur={() => {
              setIsEmailValid(validateEmail(formData.email));
            }}
          />

          {!isEmailValid && (
            <p className="input-field-error-message">Email jest niepoprawny!</p>
          )}
        </FieldSection>
        <FieldSection title="Uwagi dodatkowe do zamowienia">
          <textarea
            name="details"
            id=""
            cols="40"
            rows="10"
            style={{ resize: 'none' }}
            value={formData.details}
            onChange={updateFormData}
          ></textarea>
        </FieldSection>
      </MainSection>
      <MainSection title="ZGODY I NEWSLETTER">
        <FieldSection title="Regulamin">
          <Checkboxes
            list={[
              {
                fieldName: 'consents',
                label: 'akceptuję regulamin*',
                isChecked: formData.consents,
              },
            ]}
            onChange={(_, newValue) => {
              setIsAllRequiredFieldsFilled(true);
              setFormData({
                ...formData,
                consents: newValue,
              });
            }}
          />
        </FieldSection>
      </MainSection>

      {!isAllRequiredFieldsFilled && (
        <p className="input-field-error-message">
          Wypełnij wszystkie pola wymagane!
        </p>
      )}
      <button type="submit" disabled={!isFieldValid} className="submit-button">
        SKŁADAM ZAMÓWIENIE
      </button>
    
    </form>
    {/* <div className='modal-container'>
    <div className='modal'>
Modal
    </div>
    </div> */}
    </>
  );
}
