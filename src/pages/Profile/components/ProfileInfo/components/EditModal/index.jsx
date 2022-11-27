import React from 'react';
import { Form, Input, Modal } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../../../../../slices/userSlice';


const props = {
  name: 'avatar',
  multiple: false,
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  // action: (file) => {
  //   const formData = new FormData()
  //   formData.append('avatar', file)
    
  // },
  // onChange(info) {
  //   console.log(info);
  //   const { status } = info.file;
  //   if (status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (status === 'done') {
  //     // message.success(`${info.file.name} file uploaded successfully.`);
  //     console.log(`${info.file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     // message.error(`${info.file.name} file upload failed.`);
  //     console.log(`${info.file.name} file upload failed.`);
  //   }
  // },
  // onDrop(e) {
  //   console.log('Dropped files', e.dataTransfer.files);
  // },
};

const EditModal = ({isModalOpen, setIsModalOpen}) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const handleOk = () => {
        setIsModalOpen(false);
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const action = (file) => {
        console.log(file);
        const formData = new FormData()
        formData.append('avatar', file)
        dispatch(updateAvatar(formData))
      }

    return ( 
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
              name="basic"
              labelCol={{ span: 4}}
              wrapperCol={{ span: 20}}
              form={form}
            >
              <Form.Item
                label="Age"
                name="age"
              >
                <Input />
              </Form.Item>

              <Dragger {...props} action={action}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                  band files
                </p>
              </Dragger>

            </Form>
        </Modal>
     );
}

export default EditModal;