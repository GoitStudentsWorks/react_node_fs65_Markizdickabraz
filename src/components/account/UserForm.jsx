import { CustomInput } from 'components/account/CustomInput';
import { Formik } from 'formik';
import { FormContainer, FormWrapper, UserInfo } from './styles/Account.styled';
import { UserSchema } from './UserSchema';
import Thumb from './Avatar';
import { DatePickerField } from './Calendar';
import { Button } from 'styles/components';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/authorization/operations';

export const UserForm = () => {
  const { name, email, phone, birthday, skype, avatarURL } = useAuth();
  const [isFormDirty, setIsFormDirty] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const formData = new FormData();
    for (let key in values) {
      if (key === 'avatarURL') {
        formData.append(
          key,
          values[key] instanceof File ? values[key] : avatarURL
        );
      } else {
        formData.append(key, values[key]);
      }
    }

    dispatch(updateUser(formData));

    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }

    setIsFormDirty(false);
  };

  const initialValues = {
    name: name ? name : '',
    birthday: birthday ? birthday : '',
    email: email ? email : '',
    phone: phone ? phone : '',
    skype: skype ? skype : '',
    avatarURL: '',
  };

  return (
    <>
      {name && (
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}
          onChange={() => setIsFormDirty(true)}
        >
          {({ values, setFieldValue }) => (
            <FormContainer>
              <UserInfo>
                <Thumb
                  avatar={avatarURL}
                  file={values.avatarURL}
                  setFieldValue={setFieldValue}
                  setIsFormDirty={setIsFormDirty}
                />

                <p>{name}</p>
                <p>User</p>
              </UserInfo>

              <FormWrapper>
                <div>
                  <CustomInput
                    setIsFormDirty={setIsFormDirty}
                    label="User Name"
                    name="name"
                  />

                  <DatePickerField
                    value={birthday}
                    name="birthday"
                    setFieldValue={setFieldValue}
                    setIsFormDirty={setIsFormDirty}
                  />

                  <CustomInput label="Email" name="email" type="email" disabled />
                </div>

                <div>
                  <CustomInput
                    label="Phone"
                    name="phone"
                    type="tel"
                    setIsFormDirty={setIsFormDirty}
                  />

                  <CustomInput
                    label="Skype"
                    name="skype"
                    setIsFormDirty={setIsFormDirty}
                  />
                </div>
              </FormWrapper>

              <Button
                style={{
                  cursor: isFormDirty ? 'pointer' : 'auto',
                  margin: '0 auto',
                }}
                type={isFormDirty ? 'submit' : 'button'}
                disabled={!isFormDirty}
              >
                Save changes
              </Button>
            </FormContainer>
          )}
        </Formik>
      )}
    </>
  );
};
