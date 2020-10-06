import { PageHeader } from 'antd';
import React from 'react';
import ContentInner from '../../../components/Content/Inner';
import ContentTitle from '../../../components/Content/Title';
import ProfileListTable from '../../../modules/Profile/List/Table';
import ProfileFormModal from '../../../modules/Profile/Form/Modal';

function DataProfile() {
  return (
    <>
      <ContentTitle>
        Profiles
      </ContentTitle>
      <ContentInner>
        <>
          <ProfileListTable />
          <ProfileFormModal />
        </>
      </ContentInner>
    </>
  )
}

export default DataProfile;
