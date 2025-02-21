import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Today as TodayIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Mail as MailIcon,
  ArrowForward as ArrowForwardIcon,
  VideoCall as VideoCallIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Layout from "../layout/Layout";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);
  const [openJoinDialog, setOpenJoinDialog] = useState(false);
  const [openScheduleDialog, setOpenScheduleDialog] = useState(false);
  const [meetingId, setMeetingId] = useState("");
  const [scheduleDetails, setScheduleDetails] = useState({
    title: "",
    date: "",
    time: "",
    participants: "",
  });

  // Update the welcome section gradient
  const welcomeStyles =
    theme.palette.mode === "dark"
      ? {
          background: "linear-gradient(225deg, #FFA726 30%, #FF7043 90%)", // Orange gradient for dark theme
          color: "rgba(0, 0, 0, 0.95)",
          textShadow: "0 1px 2px rgba(255, 255, 255, 0.15)",
        }
      : {
          background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)", // Original blue gradient
          color: "white",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
        };

  const handleCreateMeeting = () => {
    const newMeetingId = Math.random().toString(36).substring(2, 12);
    // Navigate to meeting room or handle meeting creation
    console.log("Creating meeting:", newMeetingId);
  };

  const handleJoinMeeting = () => {
    if (meetingId.trim()) {
      // Navigate to meeting room or handle joining
      console.log("Joining meeting:", meetingId);
      setOpenJoinDialog(false);
    }
  };

  const handleScheduleMeeting = () => {
    console.log("Scheduling meeting:", scheduleDetails);
    setOpenScheduleDialog(false);
    setScheduleDetails({
      title: "",
      date: "",
      time: "",
      participants: "",
    });
  };

  const stats = [
    {
      title: "Tasks",
      value: "12",
      total: "15",
      progress: 80,
      icon: <AssignmentIcon color="primary" />,
    },
    {
      title: "Meetings",
      value: "4",
      total: "6",
      progress: 67,
      icon: <GroupIcon color="primary" />,
    },
    {
      title: "Messages",
      value: "23",
      total: "25",
      progress: 92,
      icon: <MailIcon color="primary" />,
    },
    {
      title: "Events",
      value: "7",
      total: "10",
      progress: 70,
      icon: <TodayIcon color="primary" />,
    },
  ];

  const recentActivities = [
    {
      avatar: "J",
      name: "John Doe",
      action: "commented on your task",
      time: "5 minutes ago",
    },
    {
      avatar: "S",
      name: "Sarah Smith",
      action: "scheduled a meeting",
      time: "2 hours ago",
    },
    {
      avatar: "M",
      name: "Mike Johnson",
      action: "shared a document",
      time: "Yesterday",
    },
  ];

  const upcomingMeetings = [
    {
      title: "Team Standup",
      time: "10:00 AM",
      participants: 5,
    },
    {
      title: "Project Review",
      time: "2:30 PM",
      participants: 8,
    },
    {
      title: "Client Meeting",
      time: "4:00 PM",
      participants: 3,
    },
  ];

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        {/* Welcome Section */}
        <Paper
          sx={{
            p: 3,
            mb: 3,
            ...welcomeStyles,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "primary.light"
                    : "primary.dark",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 2px 4px rgba(0,0,0,0.2)"
                    : "none",
              }}
            >
              {user?.email?.[0].toUpperCase() || "U"}
            </Avatar>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: welcomeStyles.color,
                  fontWeight: 700,
                  textShadow: welcomeStyles.textShadow,
                  letterSpacing: "0.5px",
                }}
              >
                Welcome back, {user?.email?.split("@")[0] || "User"}!
              </Typography>
              <Typography
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(0, 0, 0, 0.85)"
                      : "rgba(255, 255, 255, 0.85)",
                  textShadow: welcomeStyles.textShadow,
                  fontSize: "1.1rem",
                  mt: 0.5,
                }}
              >
                Here's what's happening in your workspace today
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Meeting Actions */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1a237e 0%, #311b92 100%)" // Keep purple for dark theme
                      : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)", // Green for light theme
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 4px 20px 0 rgba(0,0,0,0.5), 0 0 15px 0 rgba(63,81,181,0.4)"
                      : "0 4px 20px 0 rgba(0,0,0,0.1), 0 0 15px 0 rgba(67,160,71,0.3)",
                  "&::before": {
                    opacity: 1,
                  },
                  "& .MuiSvgIcon-root": {
                    transform: "scale(1.1)",
                    color: "#fff",
                  },
                  "& .MuiTypography-root": {
                    color: "#fff",
                  },
                  "& .MuiButton-root": {
                    bgcolor: "#fff",
                    color:
                      theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    borderColor:
                      theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    "& .MuiSvgIcon-root": {
                      color:
                        theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    },
                  },
                },
                "& > *": {
                  zIndex: 1,
                },
              }}
            >
              <VideoCallIcon
                sx={{
                  fontSize: 40,
                  color: "text.secondary",
                  transition: "all 0.3s ease",
                }}
              />
              <Typography variant="h6">Start Meeting</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleCreateMeeting}
                fullWidth
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  transition: "all 0.2s ease",
                }}
              >
                Create New Meeting
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1a237e 0%, #311b92 100%)" // Keep purple for dark theme
                      : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)", // Green for light theme
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 4px 20px 0 rgba(0,0,0,0.5), 0 0 15px 0 rgba(63,81,181,0.4)"
                      : "0 4px 20px 0 rgba(0,0,0,0.1), 0 0 15px 0 rgba(67,160,71,0.3)",
                  "&::before": {
                    opacity: 1,
                  },
                  "& .MuiSvgIcon-root": {
                    transform: "scale(1.1)",
                    color: "#fff",
                  },
                  "& .MuiTypography-root": {
                    color: "#fff",
                  },
                  "& .MuiButton-root": {
                    bgcolor: "#fff",
                    color:
                      theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    borderColor:
                      theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    "& .MuiSvgIcon-root": {
                      color:
                        theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    },
                  },
                },
                "& > *": {
                  zIndex: 1,
                },
              }}
            >
              <GroupIcon sx={{ fontSize: 40, color: "text.secondary" }} />
              <Typography variant="h6">Join Meeting</Typography>
              <Button
                variant="outlined"
                onClick={() => setOpenJoinDialog(true)}
                fullWidth
                sx={{
                  transition: "all 0.2s ease",
                  borderColor: "primary.main",
                }}
              >
                Join with Code
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1a237e 0%, #311b92 100%)" // Keep purple for dark theme
                      : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)", // Green for light theme
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 4px 20px 0 rgba(0,0,0,0.5), 0 0 15px 0 rgba(63,81,181,0.4)"
                      : "0 4px 20px 0 rgba(0,0,0,0.1), 0 0 15px 0 rgba(67,160,71,0.3)",
                  "&::before": {
                    opacity: 1,
                  },
                  "& .MuiSvgIcon-root": {
                    transform: "scale(1.1)",
                    color: "#fff",
                  },
                  "& .MuiTypography-root": {
                    color: "#fff",
                  },
                  "& .MuiButton-root": {
                    bgcolor: "#fff",
                    color:
                      theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    borderColor:
                      theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    "& .MuiSvgIcon-root": {
                      color:
                        theme.palette.mode === "dark" ? "#1a237e" : "#2E7D32",
                    },
                  },
                },
                "& > *": {
                  zIndex: 1,
                },
              }}
            >
              <TodayIcon sx={{ fontSize: 40, color: "text.secondary" }} />
              <Typography variant="h6">Schedule Meeting</Typography>
              <Button
                variant="outlined"
                onClick={() => setOpenScheduleDialog(true)}
                fullWidth
                sx={{
                  transition: "all 0.2s ease",
                  borderColor: "primary.main",
                }}
              >
                Schedule New Meeting
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1a237e 0%, #311b92 100%)" // Purple gradient for dark mode
                        : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)", // Green gradient for light mode
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 4px 20px 0 rgba(0,0,0,0.5), 0 0 15px 0 rgba(63,81,181,0.4)" // Purple shadow
                        : "0 4px 20px 0 rgba(0,0,0,0.1), 0 0 15px 0 rgba(67,160,71,0.3)", // Green shadow
                    "&::before": {
                      opacity: 1,
                    },
                    "& .MuiTypography-root": {
                      color: "#fff",
                    },
                    "& .MuiSvgIcon-root": {
                      transform: "scale(1.1)",
                      color: "#fff",
                    },
                    "& .progress-bar": {
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "#9FA8DA" // Even lighter purple on hover
                          : "#81C784", // Even lighter green on hover
                    },
                  },
                  "& > *": {
                    zIndex: 1,
                  },
                }}
              >
                <Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {stat.value}
                    <Typography component="span" variant="body2" sx={{ ml: 1 }}>
                      / {stat.total}
                    </Typography>
                  </Typography>
                  <Typography color="textSecondary">{stat.title}</Typography>
                  <Box
                    sx={{
                      mt: 1,
                      width: "100%",
                      height: 4,
                      bgcolor: "background.default",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      className="progress-bar"
                      sx={{
                        width: `${stat.progress}%`,
                        height: "100%",
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "#7986CB" // Lighter purple (#5c6bc0 -> #7986CB)
                            : "#66BB6A", // Lighter green (#43A047 -> #66BB6A)
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ color: "primary.main" }}>{stat.icon}</Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Recent Activities</Typography>
                  <IconButton size="small">
                    <NotificationsIcon />
                  </IconButton>
                </Box>
                <List>
                  {recentActivities.map((activity, index) => (
                    <React.Fragment key={index}>
                      <ListItem
                        alignItems="flex-start"
                        sx={{
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: "action.hover",
                            transform: "scale(1.01)",
                            borderRadius: 1,
                          },
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar>{activity.avatar}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={activity.name}
                          secondary={
                            <>
                              <Typography component="span" variant="body2">
                                {activity.action}
                              </Typography>
                              <br />
                              <Typography
                                component="span"
                                variant="caption"
                                color="textSecondary"
                              >
                                {activity.time}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      {index < recentActivities.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Upcoming Meetings */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Upcoming Meetings</Typography>
                  <Button endIcon={<ArrowForwardIcon />} size="small">
                    View All
                  </Button>
                </Box>
                {upcomingMeetings.map((meeting, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 2,
                      mb: 2,
                      bgcolor: "background.default",
                      "&:last-child": { mb: 0 },
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "action.hover",
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="subtitle1"
                          className="meeting-title"
                          sx={{ transition: "color 0.2s ease" }}
                        >
                          {meeting.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className="meeting-details"
                          sx={{ transition: "color 0.2s ease" }}
                        >
                          {meeting.time} • {meeting.participants} participants
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        size="small"
                        className="join-button"
                        sx={{
                          opacity: 0.7,
                          transition: "all 0.2s ease",
                        }}
                      >
                        Join
                      </Button>
                    </Box>
                  </Paper>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Join Meeting Dialog */}
        <Dialog open={openJoinDialog} onClose={() => setOpenJoinDialog(false)}>
          <DialogTitle>Join Meeting</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Meeting Code"
              fullWidth
              variant="outlined"
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenJoinDialog(false)}>Cancel</Button>
            <Button onClick={handleJoinMeeting} variant="contained">
              Join
            </Button>
          </DialogActions>
        </Dialog>

        {/* Schedule Meeting Dialog */}
        <Dialog
          open={openScheduleDialog}
          onClose={() => setOpenScheduleDialog(false)}
        >
          <DialogTitle>Schedule Meeting</DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField
                label="Meeting Title"
                fullWidth
                value={scheduleDetails.title}
                onChange={(e) =>
                  setScheduleDetails({
                    ...scheduleDetails,
                    title: e.target.value,
                  })
                }
              />
              <TextField
                type="date"
                label="Date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={scheduleDetails.date}
                onChange={(e) =>
                  setScheduleDetails({
                    ...scheduleDetails,
                    date: e.target.value,
                  })
                }
              />
              <TextField
                type="time"
                label="Time"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={scheduleDetails.time}
                onChange={(e) =>
                  setScheduleDetails({
                    ...scheduleDetails,
                    time: e.target.value,
                  })
                }
              />
              <TextField
                label="Participants Email (comma separated)"
                fullWidth
                value={scheduleDetails.participants}
                onChange={(e) =>
                  setScheduleDetails({
                    ...scheduleDetails,
                    participants: e.target.value,
                  })
                }
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenScheduleDialog(false)}>Cancel</Button>
            <Button onClick={handleScheduleMeeting} variant="contained">
              Schedule
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Dashboard;
