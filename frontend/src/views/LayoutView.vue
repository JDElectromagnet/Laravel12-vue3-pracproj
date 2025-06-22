<template>
    <n-space vertical>
        <n-space> <n-switch v-model:value="inverted" /> inverted </n-space>
        <n-layout>
            <n-layout-header :inverted="inverted" bordered>
                Header Header Header
                <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />
            </n-layout-header>
            <n-layout has-sider>
                <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
                    :native-scrollbar="false" :inverted="inverted" style="max-height: 320px">
                    <n-menu :inverted="inverted" :collapsed-width="64" :collapsed-icon-size="22"
                        :options="menuOptions" />
                </n-layout-sider>
                <n-layout>
                    <n-layout-content :inverted="inverted" style="padding: 16px; overflow: auto">
                        <n-page-header subtitle="A podcast to improve designs" @back="handleBack">
                            <n-grid :cols="5">
                                <n-gi>
                                    <n-statistic label="Episodes" value="125" />
                                </n-gi>
                                <n-gi>
                                    <n-statistic label="Guests" value="22" />
                                </n-gi>
                                <n-gi>
                                    <n-statistic label="Apologies" value="36" />
                                </n-gi>
                                <n-gi>
                                    <n-statistic label="Topics" value="83" />
                                </n-gi>
                                <n-gi>
                                    <n-statistic label="Reference Links" value="2,346" />
                                </n-gi>
                            </n-grid>
                            <template #title>
                                <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">
                                    Anyway.FM
                                </a>
                            </template>
                            <template #header>
                                <n-breadcrumb>
                                    <n-breadcrumb-item>Podcast</n-breadcrumb-item>
                                    <n-breadcrumb-item>Best Collection</n-breadcrumb-item>
                                    <n-breadcrumb-item>Ultimate Best Collection</n-breadcrumb-item>
                                    <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
                                </n-breadcrumb>
                            </template>
                            <template #avatar>
                                <n-avatar
                                    src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
                            </template>
                            <template #extra>
                                <n-space>
                                    <n-button>Refresh</n-button>
                                    <n-dropdown :options="options" placement="bottom-start">
                                        <n-button :bordered="false" style="padding: 0 4px">
                                            ···
                                        </n-button>
                                    </n-dropdown>
                                </n-space>
                            </template>
                            <template #footer>
                                As of April 3, 2021
                            </template>
                        </n-page-header>

                        <n-data-table :columns="columns" :data="data" :pagination="pagination" :max-height="550" />

                    </n-layout-content>
                </n-layout>
            </n-layout>
            <n-layout-footer :inverted="inverted" bordered>
                Footer Footer Footer
            </n-layout-footer>
        </n-layout>
    </n-space>
</template>

<script>
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
} from "@vicons/ionicons5";
import { NIcon } from "naive-ui";
import { defineComponent, h, ref } from "vue";


const columns = [
    {
        title: 'Name',
        key: 'name'
    },
    {
        title: 'Age',
        key: 'age'
    },
    {
        title: 'Address',
        key: 'address'
    }
]

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
    {
        label: "Hear the Wind Sing",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon)
    },
    {
        label: "Pinball 1973",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
            {
                label: "Rat",
                key: "rat"
            }
        ]
    },
    {
        label: "A Wild Sheep Chase",
        key: "a-wild-sheep-chase",
        disabled: true,
        icon: renderIcon(BookIcon)
    },
    {
        label: "Dance Dance Dance",
        key: "Dance Dance Dance",
        icon: renderIcon(BookIcon),
        children: [
            {
                type: "group",
                label: "People",
                key: "people",
                children: [
                    {
                        label: "Narrator",
                        key: "narrator",
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: "Sheep Man",
                        key: "sheep-man",
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: "Beverage",
                key: "beverage",
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: "Whisky",
                        key: "whisky"
                    }
                ]
            },
            {
                label: "Food",
                key: "food",
                children: [
                    {
                        label: "Sandwich",
                        key: "sandwich"
                    }
                ]
            },
            {
                label: "The past increases. The future recedes.",
                key: "the-past-increases-the-future-recedes"
            }
        ]
    }
];

export default defineComponent({
    data() {
        return {
            data: Array.from({ length: 46 }).map((_, index) => ({
                key: index,
                name: `Edward King ${index}`,
                age: 32,
                address: `London, Park Lane no. ${index}`
            })),
            columns,
            pagination: {
                pageSize: 15
            }
        }
    },
    setup() {
        return {
            inverted: ref(false),
            menuOptions
        };
    }
});
</script>