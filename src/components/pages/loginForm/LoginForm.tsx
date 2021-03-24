import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
//material ui
import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import './LoginForm.css'

// import CopyRight from '@material-ui/core'
const useStyles = makeStyles((theme) => {
 return {
    paper: {
        marginTop: theme.spacing(8),
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3,0,2)
    }
 }
})


function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                SaaS platform
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
type FormType = {
    email: string,
    password: string
}
export const LoginForm = () => {
    const classes = useStyles()
    const {register, handleSubmit, errors} = useForm<FormType>()
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const onSubmit = (data: any) => {
        console.log(data);
    }
    // const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
       
    // }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseLine/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form 
                    className={classes.form} 
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        id="email"
                        autoComplete="email"
                        autoFocus
                        inputRef={register({required: "Email is Required",  minLength: {value: 8, message: "email is incorrect!"}})}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        name="password"
                        required
                        fullWidth
                        label="Password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={
                            register(
                                {required: "Password is Required", minLength: {value: 6, message: "Incorrect password, min length 6!"}}
                                )
                            }
                    />
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                 >
                     Sign in
                 </Button>
                </form>
                 {/* <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                     </Grid>
                 </Grid> */}
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}
            {errors.password && <p className="error">{errors.password.message}</p>}
            <Box mt={8}>
                <CopyRight/>
            </Box>
        </Container>
    )
}
