import React, { Component } from 'react';
import { Box, Button } from '@chakra-ui/react';
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineCreditCard,
  AiOutlineBuild
} from 'react-icons/ai';
import Link from 'next/link';
import NavBar from '@/src/components/navbar';

const withSidebar = (App, props) => {
  return class BoardWithSidebar extends Component {
    constructor(props) {
      super(props);
    }

    static async getInitialProps(ctx) {
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      return {
        ...appProps
      };
    }

    render() {
      const { page } = props;

      const sidebarMenu = [
        { id: '1', path: '/home', buttonName: 'Home', page: 'home', icon: AiOutlineHome },
        { id: '2', path: '/boards', buttonName: 'Boards', page: 'boards', icon: AiOutlineCreditCard },
        { id: '3', path: '/templates', buttonName: 'Templates', page: 'templates', icon: AiOutlineBuild },
        { id: '4', path: '/settings', buttonName: 'Settings', page: 'settings', icon: AiOutlineSetting }
      ];
      

      return (
        <>
          <NavBar bg="white" />
          <Box display="flex" mt="2%">
            <Box height="80vh" width="20vw" boxShadow="base" rounded="lg" p="1em" ml="20px">
              <Box display="flex" flexDirection="column">
                {sidebarMenu.map((menu) => (
                  <Link href={menu.path} key={menu.id}>
                    <Button
                      mt="5px"
                      mb="5px"
                      height="4rem"
                      borderRadius="1rem"
                      boxShadow={page === menu.page ? 'inner' : 'base'}
                      display="flex"
                      justifyContent="left"
                      colorScheme="gray">
                      <>
                        <menu.icon size="20px" /> &nbsp; {menu.buttonName}
                      </>
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
            <App />
          </Box>
        </>
      );
    }
  };
};

export default withSidebar;
