
import { Container, AppBar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function SignUpPage() {
  return (
   
   <Container maxWidth="sm">
    
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/login" passHref>
              Sign up
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/signup" passHref>
              Log in
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: 'center', my: 4 }}
        >
          <Typography variant="h4" component="h1">
            Sign In
          </Typography>
          <SignIn />
        </Box>
    </Container>
  )
}
