import ScreenWrapper from "@/components/ScreenWrapper";
import TextInput from "@/components/TextInput";
import Typography from "@/components/Typography";
import React, { useState } from "react";

import styles from "./styles";
import Button from "@/components/Button";
import { useFormik } from "formik";
import schema, { editSchema } from "./validationSchema";
import { uniqueId } from "lodash";
import uuid from 'react-native-uuid';
import { useAtom } from "jotai";
import submitComplaintAtom, { removeComplaint, editComplaint } from "@/atoms/complaintAtom";
import Complaint from "@/components/Complaint";
import Modal from "@/components/Modal";
import { router } from "expo-router";

const Complain = () => {
    const [{ data, error }, submitComplaint] = useAtom(submitComplaintAtom) as any;
    const [, deleteComplaint] = useAtom(removeComplaint) as any;
    const [, modifyComplaint] = useAtom(editComplaint) as any;

    const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
    const [editOpen, setEditOpen] = useState(false);

    console.log({ data, error })

    const { errors, handleChange, handleSubmit, values } = useFormik({
        validationSchema: schema,
        onSubmit: (values: any)=> {
            const complaintId = uuid.v4()
            const createdTime = new Date()
            const payload = {
                ...values,
                id: complaintId,
                createdAt: createdTime
            }
          submitComplaint(payload)
        },
        initialValues: {
            type: '',
            description: ''
        }
    })


    const validations = useFormik({
        validationSchema: editSchema,
        onSubmit: (values: any) => {

         const modifyData = {
            complaintId: selectedComplaint?.id,
            payload: values,
            callback: ()=> setEditOpen(false)
         }

         modifyComplaint(modifyData)
        },
        initialValues: {
            type: selectedComplaint?.type || '',
            description: selectedComplaint?.description || ''
        }
    })

    
  return (
    <ScreenWrapper hasBack headerTitle="Complain" onBackPress={() => router.navigate('/(drawer)/(tabs)')}>
      <TextInput.Select
      value={values?.type}
      onChange={handleChange('type')}
        style={styles.input}
        placeholder="Complaint type"
        options={[
          {
            label: "Vehicle not clean",
            value: "Vehicle not clean",
          },
          {
            label: "Vehicle arrived late",
            value: "Vehicle arrived late",
          },
          {
            label: "Vehicle has mechanical fault",
            value: "Vehicle has mechanical fault",
          },
        ]}
        hasError={!!errors?.type}
        error={errors?.type as any || undefined}
      />
      <TextInput.TextArea
      value={values?.description}
      onChange={handleChange('description')}
      hasError={!!errors?.description}
      error={errors?.description as any || undefined}
        style={styles.input}
        placeholder="Write your complain here(minimum 10 characters)"
      />
      <Button type="primary" style={styles.input} onPress={handleSubmit}>
        Submit
      </Button>
      <Typography.Title>Recent Reviews</Typography.Title>
      {data?.map((complaint: any)=> (
        <Complaint {...complaint}
         style={{marginVertical: 10}} 
         onDelete={()=> deleteComplaint(complaint?.id)}
         onEdit={()=> {
            setSelectedComplaint(complaint);
            validations.setFieldValue('type', complaint?.type);
            validations?.setFieldValue('description', complaint?.description)
            setEditOpen(true)
         }}
         />
      ))}
      <Modal visible={editOpen} toggleVisibility={()=> setEditOpen(!editOpen)} closable>
      <TextInput.Select
      value={validations?.values?.type}
      onChange={validations?.handleChange('type')}
        style={styles.input}
        placeholder="Complaint type"
        options={[
          {
            label: "Vehicle not clean",
            value: "Vehicle not clean",
          },
          {
            label: "Vehicle arrived late",
            value: "Vehicle arrived late",
          },
          {
            label: "Vehicle has mechanical fault",
            value: "Vehicle has mechanical fault",
          },
        ]}
        hasError={!!validations?.errors?.type}
        error={validations?.errors?.type as any || undefined}
      />
      <TextInput.TextArea
      value={validations?.values?.description}
      onChange={validations?.handleChange('description')}
      hasError={!!validations?.errors?.description}
      error={validations?.errors?.description as any || undefined}
        style={styles.input}
        placeholder="Write your complain here(minimum 10 characters)"
      />
      <Button type="primary" style={styles.input} onPress={validations?.handleSubmit}>
        Submit
      </Button>
      </Modal>
    </ScreenWrapper>
  );
};

export default Complain;
