import React from "react";
import DataTable from "./DataTable";
import Button from '@mui/material/Button';

function ViewPassMas() {
    return (
        <div>
            <Button variant="contained" color="primary" > PASS 원장 추가 </Button>&nbsp;
            <DataTable />
        </div>
    );
}

export default ViewPassMas;