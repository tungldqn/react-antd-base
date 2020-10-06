/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Modal } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { changeProfileFormIsOpen, deleteProfile, fetchProfiles } from '../actions';

function ProfileListTable({ profileList, fetchProfiles, deleteProfile, changeProfileFormIsOpen }) {

  const { confirm } = Modal;

  const columns = [
    {
      title: 'Profile Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'apiKeyType',
      key: 'apiKeyType',
    },
    {
      title: 'Environment',
      dataIndex: 'env',
      key: 'env',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      align: 'center',
      render: (_, record) => (
        <>
          <EditOutlined className="mx-1 cursor-pointer" onClick={onSelectForm(record)} />
          <DeleteOutlined className="mx-1 cursor-pointer" onClick={onDeleteProfile(record.id)} />
        </>
      )
    }
  ]

  const onDeleteProfile = profileId => () => {
    confirm({
      content: 'Do you want to delete it ?',
      onOk() {
        deleteProfile(profileId);
      }
    })
  }

  const onSelectForm = selectedForm => () => {
    changeProfileFormIsOpen(true, {})
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  return (
    <Table
      columns={columns}
      dataSource={profileList}
      rowKey="id"
    />
  )
}

const mapStateToProps = state => ({
  profileList: state.profile.list
})

const mapDispatchToProps = dispatch => ({
  fetchProfiles: () => dispatch(fetchProfiles()),
  deleteProfile: profileId => dispatch(deleteProfile(profileId)),
  changeProfileFormIsOpen: (isOpen, selected) => dispatch(changeProfileFormIsOpen(isOpen, selected))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileListTable);

ProfileListTable.propTypes = {
  profileList: PropTypes.array,
  fetchProfiles: PropTypes.func,
  deleteProfile: PropTypes.func,
  changeProfileFormIsOpen: PropTypes.func
}
