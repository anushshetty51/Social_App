import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '400px', // Set a max height for consistency
    height: 'auto', // Maintain aspect ratio
  },
  card: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '15px',
    margin: '10px',
    flex: 1,
    padding: '20px',
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    backgroundColor: '#f5f5f5',
  },
  recommendedPost: {
    flex: '1 1 calc(33% - 20px)',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
  image: {
    height: '200px', // Set a consistent height for recommended posts
    maxHeight: '200px', // Max height to maintain consistency
    objectFit: 'cover',
    borderRadius: '10px',
  },
  commentOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  commentInnerContainer: {
    height: '200px',
    width:'900px',
    overflowY: 'auto',
    marginRight: '30px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  
}));
