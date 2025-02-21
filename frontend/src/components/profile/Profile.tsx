import React from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  IconButton,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Layout from '../layout/Layout';

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    organization: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log('Updated profile:', formData);
  };

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
          <Box sx={{ mb: 4, textAlign: 'center', position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2,
              }}
            >
              <Avatar
                sx={{
                  width: '100%',
                  height: '100%',
                  fontSize: '3rem',
                }}
              >
                {user?.email?.[0].toUpperCase()}
              </Avatar>
              <IconButton
                component="label"
                sx={{
                  position: 'absolute',
                  right: -8,
                  bottom: -8,
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  '&:hover': {
                    bgcolor: 'background.paper',
                  },
                }}
              >
                <input hidden accept="image/*" type="file" />
                <Edit fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="h5" gutterBottom>
              My Profile
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Profile; 