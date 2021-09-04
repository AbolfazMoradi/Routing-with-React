import React from 'react';
import Styles from './Buttons.module.css';
import { Button } from 'react-bootstrap';

const Buttons = () => {
    return (
        <div className="d-grid gap-2">
            <Button className={Styles.PrimaryBtn} variant="primary" size="lg">
                NextPage
            </Button>
            <Button className={Styles.SeconderyBtn} variant="secondary" size="lg">
                Previous Page
            </Button>
        </div>
    );
}

export default Buttons;