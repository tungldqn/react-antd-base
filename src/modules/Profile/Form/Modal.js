/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Input, Form } from 'antd';
import { connect } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import { bool, func } from 'prop-types';
import { changeProfileFormIsOpen } from '../actions';

function ProfileFormModal({ profileFormIsOpen, changeProfileFormIsOpen }) {

  function onOk() {

  }

  function onCancel() {
    changeProfileFormIsOpen(false, {})
  }

  return (
    <Modal
      visible={profileFormIsOpen}
      title="Title"
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        layout="vertical"
      >
        <Form.Item
          label="Profile name:"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your profile name !'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Profile type:"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your profile name !'
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>

    </Modal>
  )
}

const mapStateToProps = state => ({
  profileFormIsOpen: state.profile.formIsOpen
})

const mapDispatchToProps = dispatch => ({
  changeProfileFormIsOpen: (isOpen, selected) => dispatch(changeProfileFormIsOpen(isOpen, selected))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormModal);

ProfileFormModal.propTypes = {
  profileFormIsOpen: bool,
  changeProfileFormIsOpen: func
}
