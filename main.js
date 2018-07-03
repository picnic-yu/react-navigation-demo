import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import {
    TabNavigator,
    createBottomTabNavigator,
    StackNavigator,
    DrawerNavigator,
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

//首页的页面
import Home from './src/Home';
import Type from './src/Type';
import ShopCar from './src/ShopCar';
import Mine from './src/Mine';

import Details from './src/Details';
//侧滑菜单的页面
import Wallet from "./src/drawer/Wallet";
import CardCoupons from "./src/drawer/CardCoupons";
import Invite from "./src/drawer/Invite";

//Home 如果主页要显示顶部那就要这样设置
// const Home_stack = createStackNavigator({
//     Home:{
//         screen:Home,
//         navigationOptions:{
//             headerTitleStyle:{flex:1,textAlign:"center"}
//         }
//     }
// });
/**
 * 配置底部标签
 */
const Tab = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '分类',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '分类',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/ic_home.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        Type: {
            screen: Type,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '分类',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '分类',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/ic_home.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        ShopCar: {
            screen: ShopCar,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '分类',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '分类',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/ic_home.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        Mine: {
            screen: Mine,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '分类',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '分类',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./images/ic_home.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                    />
                ),
            }
        },

    },

    {
        //颜色控制
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);


const Stack = StackNavigator({
    Tab: {
        screen: Tab,
    },
    Details: {
        screen: Details,
    },

    //DrawerNavigator跳转的页面也必须在这里注册
    Wallet: {
        screen: Wallet,
    },
    CardCoupons: {
        screen: CardCoupons,
    },
    Invite: {
        screen: Invite,
    },
});




/*
 * 配置堆栈导航
 */
const RootStack = createStackNavigator({
    main:{
        screen:Tab,
        navigationOptions:{
            header:null
        }
    },
    Details: {
        screen: Details,
    },

    //DrawerNavigator跳转的页面也必须在这里注册
    Wallet: {
        screen: Wallet,
    },
    CardCoupons: {
        screen: CardCoupons,
    },
    Invite: {
        screen: Invite,
    },
    // LoginActivity:{
    //     screen:LoginActivity,
    //     navigationOptions:{
    //         title:"title1",//标题，如果设置了这个导航栏和标签栏的title就会变成一样的，所以不推荐使用这个方法。
    //         //header:null,//可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了。
    //         headerTitle:"登录标题",//设置导航栏标题，推荐用这个方法。
    //         headerBackTitle:"backtitle",//设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
    //         //headerTruncatedBackTitle:,//设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"。（上个页面的标题过长，导致显示不下，所以改成了短一些的。）
    //         headerRight:(<Ionicons name='ios-archive' size={30} color='gray' style={{marginRight:20}} />),//设置导航条右侧。可以是按钮或者其他。
    //         // headerLeft：,//设置导航条左侧。可以是按钮或者其他。
    //         headerStyle:{backgroundColor:"gray"},//设置导航条的样式。背景色，宽高等。如果想去掉安卓导航条底部阴影可以添加elevation: 0，iOS下用shadowOpacity: 0。
    //         headerTitleStyle:{flex:1,textAlign:"center"},//设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了。在安卓上会遇到，如果左边有返回箭头导致文字还是没有居中的问题，最简单的解决思路就是在右边也放置一个空的按钮。
    //         //headerBackTitleStyle:{flex:1,textAlign:"center"},//设置导航条返回文字样式。
    //         // headerTintColor：,//设置导航栏文字颜色。总感觉和上面重叠了。
    //         // headerPressColorAndroid:,//安卓独有的设置颜色纹理，需要安卓版本大于5.0
    //         // gesturesEnabled:,//是否支持滑动返回手势，iOS默认支持，安卓默认关闭
    //         gestureResponseDistance:{horizontal:300},//对象覆盖触摸从屏幕边缘开始的距离，以识别手势。 它需

    //     }

    // }

});
/**
 * 配置侧滑菜单
 */
const Drawer = createDrawerNavigator({
    main:{
        screen:RootStack,
        navigationOptions: {
            drawerLabel: '我的钱包',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Wallet: {
        screen: Wallet,
        navigationOptions: {
            drawerLabel: '我的钱包',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    CardCoupons: {
        screen: CardCoupons,
        navigationOptions: {
            drawerLabel: '我的卡券',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Invite: {
        screen: Invite,
        navigationOptions: {
            drawerLabel: '邀请好友',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    drawerWidth: 250, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentOptions: {
    //     // activeTintColor: 'black',  // 选中文字颜色
    //     activeBackgroundColor: '#fff', // 选中背景颜色
    //     inactiveTintColor: '#EB3695',  // 未选中文字颜色
    //     inactiveBackgroundColor: '#fff', // 未选中背景颜色
    //     style: {  // 样式
    //
    //     }
    // },
});

export default class Main extends React.Component {
    render() {
        return <Drawer />;
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});
