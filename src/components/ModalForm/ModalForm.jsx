import { Formik } from 'formik';
import { useState } from 'react';
import { Button, Modal, CloseButton } from 'react-bootstrap';
import Animate from 'react-smooth';
import { validationSchema } from 'helpers/validationSchema';
import { levels } from 'constants/languageLevels';
import successPic from '../../icons/success-image.svg';
import {
  Form,
  InputPositioning,
  Label,
  TextTypeInput,
  HelperText,
  RadioGroupText,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupInput,
  FileInput,
  FileInputLabel,
  FileInputUpload,
  FileInputPlaceholder,
  PhoneMask,
  FormSuccessPic,
} from './modalForm.styled';

const ModalForm = props => {
  const [nameFilled, setNameFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [phoneFilled, setPhoneFilled] = useState(false);
  const [radioBtnChecked, setRadioBtnChecked] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const buttonIsActive =
    nameFilled && emailFilled && phoneFilled && radioBtnChecked && fileName;

  const handleChange = e => {
    if (e.target.name === 'name') setNameFilled(true);
    if (e.target.name === 'email') setEmailFilled(true);
    if (e.target.name === 'phone') setPhoneFilled(true);
    if (e.target.name === 'language') setRadioBtnChecked(true);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    document.getElementById(values.language).checked = false; //formik doesn't reset radio buttons properly
    setNameFilled(false);
    setEmailFilled(false);
    setPhoneFilled(false);
    setFileName('');

    setFormSubmitted(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className=" ms-auto">
          {formSubmitted
            ? 'Application submitted!'
            : 'Apply for job of your dream!'}
        </Modal.Title>
        <CloseButton
          onClick={() => {
            props.onHide();
            setFormSubmitted(false);
          }}
        />
      </Modal.Header>
      <Modal.Body>
        {formSubmitted ? (
          <Animate easing="ease-in" to="1" from="0" attributeName="opacity">
            <FormSuccessPic src={successPic} alt="Success notification" />

            <Modal.Footer>
              <Button
                onClick={() => {
                  props.onHide();
                  setFormSubmitted(false);
                }}
                className="me-auto ms-auto"
                variant="outline-success"
              >
                Close
              </Button>
            </Modal.Footer>
          </Animate>
        ) : (
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              language: '',
              resume: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
          >
            {formik => (
              <Form onSubmit={formik.handleSubmit} onChange={handleChange}>
                <div>
                  <InputPositioning>
                    {nameFilled && <Label>Your name</Label>}
                    <TextTypeInput
                      id="name"
                      name="name"
                      type="text"
                      border={formik.errors.name && '1px solid red'}
                      placeholder={nameFilled ? '' : 'Your name'}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <HelperText>{formik.errors.name}</HelperText>
                    ) : null}
                  </InputPositioning>

                  <InputPositioning>
                    {emailFilled && <Label>Email</Label>}
                    <TextTypeInput
                      id="email"
                      type="email"
                      name="email"
                      border={formik.errors.email && '1px solid red'}
                      placeholder={emailFilled ? '' : 'Email'}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <HelperText>{formik.errors.email}</HelperText>
                    ) : null}
                  </InputPositioning>

                  <InputPositioning>
                    {phoneFilled && <Label>Phone</Label>}
                    <TextTypeInput
                      id="phone"
                      type="text"
                      name="phone"
                      border={formik.errors.phone && '1px solid red'}
                      placeholder={phoneFilled ? '' : 'Phone'}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps('phone')}
                    />
                    <PhoneMask>+380XXXXXXXXX</PhoneMask>

                    {formik.touched.phone && formik.errors.phone ? (
                      <HelperText>{formik.errors.phone}</HelperText>
                    ) : null}
                  </InputPositioning>
                </div>

                <RadioGroupText>Indicate your English level:</RadioGroupText>

                <RadioGroup>
                  {levels.map(level => (
                    <RadioGroupLabel key={level.id}>
                      <RadioGroupInput
                        id={level.id}
                        type="radio"
                        name="language"
                        value={level.id}
                        onChange={formik.handleChange}
                      />
                      {`${level.id} ${level.name}`}
                    </RadioGroupLabel>
                  ))}
                  {formik.touched.language && formik.errors.language ? (
                    <HelperText>{formik.errors.language}</HelperText>
                  ) : null}
                </RadioGroup>

                <FileInput
                  id="resume"
                  name="resume"
                  type="file"
                  placeholder="Upload your CV"
                  onChange={e => {
                    formik.setFieldValue('resume', e.currentTarget.files[0]);
                    setFileName(e.currentTarget.files[0].name);
                  }}
                />
                <FileInputLabel htmlFor="resume">
                  <FileInputUpload>Upload</FileInputUpload>
                  <FileInputPlaceholder>
                    {fileName ? fileName : 'Upload your CV'}
                  </FileInputPlaceholder>
                </FileInputLabel>
                {formik.touched.resume && formik.errors.resume ? (
                  <HelperText>{formik.errors.resume}</HelperText>
                ) : null}
                <Modal.Footer style={{ borderTop: '0' }}>
                  <Button
                    type="submit"
                    variant="success"
                    className="me-auto ms-auto"
                    size="lg"
                    disabled={!buttonIsActive}
                  >
                    Apply
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
