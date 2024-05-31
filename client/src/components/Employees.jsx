import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const employees = [
  {
    icon: <ViewQuiltRoundedIcon />,
    name: 'Suvarna',
    expertise: 'JS',
    bio:    {
        about: 'Employee profile',
        education: 'UNH',
        degree: 'Masters in Computer Science'
    },
    desired_salary: '2499',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    name: 'Alice',
    expertise: 'iOS',
    bio:    {
        about: 'Employee profile',
        education: 'UV',
        degree: 'Bachelor of Information Technology'
    },
    desired_salary: '2499',
  },
  {
    icon: <DevicesRoundedIcon />,
    name: 'Kevin',
    expertise: 'MERN',
    bio:    {
        about: 'Employee profile',
        education: 'MIT',
        degree: 'phD'
    },
    desired_salary: '3000',
  },
];

export default function Employees() {
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = React.useState(0);

  const handleEmployeeClick = (index) => {
    setSelectedEmployeeIndex(index);
  };

  const selectedEmployee = employees[selectedEmployeeIndex];

  return (
    <Container id="employees" sx={{ py: { xs: 8, sm: 16 } }} >
      <Grid container spacing={6}>
        <Grid employee xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Employees
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here you can view a brief overview of employees.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {employees.map(({ name }, index) => (
              <Chip
                key={index}
                label={name}
                onClick={() => handleEmployeeClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedEmployeeIndex === index ? 'primary.light' : '';
                    }
                    return selectedEmployeeIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedEmployeeIndex === index ? 'none' : '';
                    }
                    return selectedEmployeeIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedEmployeeIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedEmployeeIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? employees[selectedEmployeeIndex].imageLight
                    : employees[selectedEmployeeIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedEmployee.name}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedEmployee.expertise}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {employees.map(({ icon, name, expertise, }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleEmployeeClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '90%',
                  background: 'none',
                  backgroundColor:
                    selectedEmployeeIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedEmployeeIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedEmployeeIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedEmployeeIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedEmployeeIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      Expertise: {expertise}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          employee
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              width='100000px'
              display='flex'
              flexDirection='column'

            >
            <Box sx={{ px: 4, pb: 4 }}>
              <Typography color="text.primary" variant="body3" fontWeight="bold">
                {selectedEmployee.name}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                Expertise: {selectedEmployee.expertise}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                Desired Salary: {selectedEmployee.desired_salary}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                About Me: {selectedEmployee.bio.about}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                Education: {selectedEmployee.bio.education}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                Degree: {selectedEmployee.bio.degree}
              </Typography>
            </Box>
            </Box>
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? employees[selectedEmployeeIndex].imageLight
                    : employees[selectedEmployeeIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}