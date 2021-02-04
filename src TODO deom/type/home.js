option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',

        symbolSize: 50,
        roam: true,
        label: {
            show: true
        },
        edgeSymbol: [],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            fontSize: 20
        },
        data: [{
                name: '网络综合管理系统',
                x: 500,
                y: 20,

            }, {
                name: '交换机',
                x: 500,
                y: 100
            }, {
                name: '可信交换机S1',
                x: 350,
                y: 170
            },
            {
                name: '可信网络终端A',
                x: 350,
                y: 100
            },
            {
                name: '可信路由器R3',
                x: 500,
                y: 150
            }, {
                name: '可信交换机S2',
                x: 650,
                y: 170
            }, {
                name: '可信路由器R1',
                x: 400,
                y: 170
            }, {
                name: '可信路由器R2',
                x: 600,
                y: 170
            },
            {
                name: '可信网络终端B',
                x: 650,
                y: 100
            }
        ],
        // links: [],
        links: [{
                source: '网络综合管理系统',
                target: '交换机',
                value: "断开",
                lineStyle: {
                    curveness: 0,
                    color: "red",
                    opacity: 0.6,
                    width: 2,
                    type: "dashed"
                },
                label: {
                    edgeLabel: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 18
                            },
                            formatter: "{c}"
                        }
                    }
                }

            }, {
                source: '交换机',
                target: '可信交换机S1',

            },
            {
                source: '交换机',
                target: '可信网络终端A'
            },
            {
                source: '交换机',
                target: '可信路由器R3'
            },
            {
                source: '可信路由器R3',
                target: '可信路由器R2'
            },
            {
                source: '可信路由器R3',
                target: '可信路由器R1'
            },
            {
                source: '可信网络终端A',
                target: '可信交换机S1'
            },
            {
                source: '可信路由器R1',
                target: '可信路由器R2'
            },
            {
                source: '可信路由器R2',
                target: '可信交换机S2'
            },
            {
                source: '交换机',
                target: '可信路由器R2'
            },
            {
                source: '交换机',
                target: '可信交换机S2'
            },
            {
                source: '可信交换机S2',
                target: '可信网络终端B'
            },
            {
                source: '交换机',
                target: '可信路由器R1'
            },

            {
                source: '交换机',
                target: '可信网络终端B'
            },
            {
                source: '可信交换机S1',
                target: '可信路由器R1'
            },
        ],
        lineStyle: {
            opacity: 3.9,
            width: 2,
            curveness: 0
        }
    }]
};