import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Checkbox from "@mui/material/Checkbox";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from 'react-redux';
import { deleteSingleData, editData } from '../redux/action';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './TableRowComponent.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TableRowComponent=({dashboardFilds,handleSelectAllClick})=>{
  const head=["Name","Email","Role","Actions"]
  const dispatch=useDispatch();
  const [mainCheck,setMainCheck]=React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [role, setRole] = React.useState('');
  const [id,setId]=React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{
     setOpen(false);
     setName("")
     setMail("")
     setRole("")
     setId("");
  }

  let filterData=[];
  let new_data;
  
  React.useEffect(()=>{
    setMainCheck(false)
  },[dashboardFilds])

  const HandleCheckedBox=(e,user,id)=>{
    if(e.target.checked){
      if(filterData.length){ 
          filterData.push(user)
      }
      else{
        filterData.push(user)
      }
    }
    else{
       new_data=filterData.filter((e)=>e.id!=id);
       filterData=new_data;
    }
    handleSelectAllClick(filterData); 
  }

  const handleCkeckBox=()=>{
    setMainCheck(!mainCheck);
    handleSelectAllClick(dashboardFilds)
    if(!mainCheck){
      handleSelectAllClick(dashboardFilds)
    }
    else{
      handleSelectAllClick([])
    }
  }

  const handleSingleDelete=(id)=>{
    dispatch(deleteSingleData(id))
  }

  const handleEdit=(id,name,email,role)=>{
    handleOpen()
    setId(id);
    setName(name)
     setMail(email)
     setRole(role)
  }

  const editName=(e)=>{
    setName(e.target.value)
  }

  const editEmail=(e)=>{
    setMail(e.target.value)
  }

  const editRole=(e)=>{
    setRole(e.target.value)
  }

  const applyEdit=()=>{
    let data={
      name,
      mail,
      role,
      id
    }
    if(name.length==0 || mail.length==0 || role.length==0){
      alert("Plz Fill the data")
    }
    else{
      dispatch(editData(data))
      handleClose();
    }
  }
 
    return (
      <>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={mainCheck}
                  color="primary"
                    onClick={(e)=>handleCkeckBox(e)}
                />
              </TableCell>
              {head.map((header,index) => (
                <TableCell key={index} sx={{ fontWeight: "1000" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboardFilds.map((user) => (
              <TableRow
                key={user.id}
                style={{backgroundColor:mainCheck ?'lightgrey':''}}
              >
                  {mainCheck?( <input className={styles.inputbox} type='checkbox' checked={true} /> ):(<TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onClick={(e)=>HandleCheckedBox(e,user,user.id)}
                  />
                </TableCell>)
                }
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={()=>handleEdit(user.id,user.name,user.email,user.role)}
                  >
                    <EditLocationAltIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={()=>handleSingleDelete(user.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit data
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{display:'flex',justifyContent:'space-between'}}>
          <input placeholder='Enter new name...' style={{border:'1px solid black',width:'250px',height:'30px',borderRadius:'10px'}} onChange={editName} value={name} />
          <input placeholder='Enter new email...' style={{border:'1px solid black',width:'250px',height:'30px',borderRadius:'10px'}} onChange={editEmail} value={mail} />
          <input placeholder='Enter new role...' style={{border:'1px solid black',width:'250px',height:'30px',borderRadius:'10px'}} onChange={editRole} value={role} />
        </Typography>
        <Typography>
        <div style={{display:'flex',justifyContent:'center',padding:'2%'}}>
            <button style={{padding:'1%',margin:"0px 5px",cursor:'pointer'}} onClick={applyEdit}> Apply </button>
            <button style={{padding:'1%',margin:"0px 5px",cursor:'pointer'}} onClick={handleClose}> Cancle </button>
          </div>
        </Typography>
      </Box>
    </Modal>
      </>
    );
}
export default TableRowComponent
