<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <el-container style="height: 100%">
            <el-header>Header</el-header>
            <el-container>
                <el-aside
                    width="200px"
                    style="background-color: rgb(238, 241, 246)"
                >
                    <!-- default-openeds数组中为默认需要打开的选项卡 -->
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1">
                            <template slot="title"
                                ><i class="el-icon-message"></i>导航一</template
                            >
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1"
                                    >选项4-1</el-menu-item
                                >
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"
                                ><i class="el-icon-menu"></i>导航二</template
                            >
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1"
                                    >选项4-1</el-menu-item
                                >
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"
                                ><i class="el-icon-setting"></i>导航三</template
                            >
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="3-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="3-4-1"
                                    >选项4-1</el-menu-item
                                >
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            list: [],
        };
    },
};
</script>

<style>
body,
html {
    margin: 0;
    height: 100%;
}
#app {
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    height: 100%;
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
