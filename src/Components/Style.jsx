import {makeStyles} from '@material-ui/core'
export default makeStyles(() => ({

    html:{
        scrollBehavior: 'smooth'
    },
    introCard:{
        justifyContent: 'space-around',
        marginTop: '1%',
        border: 'none',
        boxShadow: 'none',
        textAlign: 'left'
    },
    introCardText: {
        display: 'flex',
        fontWeight: 'bold'
    },
    introTheme:{
        paddingTop: '2rem'
    },
    aboutHeading: {
        marginBottom: '1rem',
        TextDecoration: 'underline'
    },
    aboutCard:{
        marginBottom: '2rem',
        justifyContent: 'space-between'
    },
    ServiceImg:{
        marginRight: '50px',
        width: '90%',
        height: 'min-content'
    },
    aboutSubHeading: {
        fontWeight: 'bold',
        marginTop: '2rem'
    },
    MobileServiceImg: {
        width: '100%',
        height: 'min-content',
        marginTop: '1rem'
    },
    mobileViewAbout: {
        color: 'gray',
        marginBottom: '1rem'
    }
})
);