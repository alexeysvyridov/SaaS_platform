import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
//material ui
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ComputerIcon from '@material-ui/icons/Computer';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
//comp
import {Dashboard} from '../Dashboard/Dashboard';
import {Events} from '../Events/Events';
import {Admin} from '../Admin/Admin';
import {Monitors} from '../Monitors/Monitors';
import './Navigation.css'
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
    };
  }

  const useStyles = makeStyles((theme) => ({
      root: {
          backgroundColor:  theme.palette.background.paper,
          display: 'flex',
          height: '100vh'
      },
      tabs: {
        paddingTop: '50px',
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#1f283e',
        color: '#a9afbbd1;'
      },
  }))

export const Navigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const allTabs = ['/dashboard', '/events', '/monitors', '/admin'];
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
    return (
        <div className="containerNavigation">
            <div className={classes.root}>
                <Tabs 
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Dashboard" icon={<DashboardIcon/>}  {...a11yProps(0)} component={Link} to={allTabs[0]}/>
                    <Tab label="Events" icon={<EventIcon/>}   {...a11yProps(1)} component={Link} to={allTabs[1]}/>
                    <Tab label="Monitors" icon={<ComputerIcon/>}   {...a11yProps(2)} component={Link} to={allTabs[2]}/>
                    <Tab label="Admin" icon={<SupervisorAccountIcon/>}   {...a11yProps(3)} component={Link} to={allTabs[3]}/>
                </Tabs>
            </div>
                <Switch>
                <Route path={allTabs[0]} component={Dashboard}/>
                <Route path={allTabs[1]} component={Events}/>
                <Route path={allTabs[2]} component={Monitors}/>
                <Route path={allTabs[3]} component={Admin}/>
                <Route render={() => <Redirect from="*" to="/dashboard"/>}/>
            </Switch>
        </div>
    )
}
