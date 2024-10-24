import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import '../styles/ProfileCard.css';

const ProfileCard = ({ name, email, role, profileImage, onEditProfile }) => {
    const header = (
        <Avatar image={profileImage} size="xlarge" shape="circle" className="p-mb-3" />
    );

    const footer = (
        <div className="p-d-flex p-jc-between">
            <Button label="Editar Perfil" icon="pi pi-user-edit" className="p-button-rounded p-button-success" onClick={onEditProfile} />
            <Button label="Cerrar Sesión" icon="pi pi-sign-out" className="p-button-rounded p-button-danger" />
        </div>
    );

    return (
        <Card title={name} subTitle={role} header={header} footer={footer} className="profile-card">
            <p className="profile-email">
                <i className="pi pi-envelope" style={{ marginRight: '.5em' }}></i>{email}
            </p>
        </Card>
    );
};

export default ProfileCard;
