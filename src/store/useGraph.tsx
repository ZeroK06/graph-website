import { toast } from "react-hot-toast/headless";
import { create } from "zustand";
import distance from "../utils/distancePoints";

interface Node {
    id: string,
    name: string,
    fill: string,
    x: number,
    y: number
}
interface Link {
    id: string,
    name: string,
    distance: number,
    fill: string,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    nodeStart: string,
    nodeEnd: string,
    nodes: Array<string>
}

type Graph = {
    arrNodes: Array<Node>,
    isDelete: boolean,
    changeDelete: (type: boolean) => void,
    changeNew: (type: boolean) => void,
    changeMove: () => void,
    changeConecte: (type: boolean) => void,
    isMove: boolean,
    isConecte: boolean,
    isNew: boolean,
    arrLinks: Array<Link>,
    selectNodes: Array<string>,
    resetColorate: () => void,
    colorateGraph: (nodes: Array<string>, links: Array<string>) => void,
    addSelectNode: (id: string) => void,
    addNode: (node: Node) => void,
    addLink: (link: Link) => void,
    removeNode: (id: string) => void,
    removeLink: (name: string) => void,
    updateNode: (id: string, props: { name?: string, fill?: string, x?: number, y?: number }) => void,
    updateLink: (id: string, props: { name?: string, fill?: string, fromX: number, fromY: number, toX: number, toY: number }) => void,
    updateNodePosition: (id: string, props: { x?: number, y?: number }) => void,
    updateLinkPosition: (id: string, props: { fromX?: number, fromY?: number, toX?: number, toY?: number, distance?: number }) => void
}

const useGraph = create<Graph>()(set => ({
    isDelete: false,
    isConecte: false,
    isMove: false,
    isNew: false,
    colorateGraph: (nodes, links) =>
        set((state: Graph) =>
        ({
            ...state, arrNodes: state.arrNodes.map((item: Node) => ({ ...item, fill: nodes.includes(item.name) ? 'red' : 'purple' })),
            arrLinks: state.arrLinks.map((item: Link) => ({ ...item, fill: links.includes(item.id) ? 'green' : 'white' }))
        })),
    resetColorate: () => set((state: Graph) => ({ ...state, arrNodes: [...state.arrNodes.map((item: Node) => ({ ...item, fill: 'purple' }))], arrLinks: [...state.arrLinks.map(item => ({ ...item, fill: 'white' }))] })),
    changeDelete: (type) => set((state: Graph) => ({ ...state, isDelete: type })),
    changeNew: (type) => set((state: Graph) => ({ ...state, isNew: type })),
    changeMove: () => set((state: Graph) => ({ ...state, isMove: !state.isMove })),
    changeConecte: (type) => set((state: Graph) => ({ ...state, isConecte: type })
    ),
    arrNodes: [
        {
            "fill": "purple",
            "id": "1690274694810",
            "name": "a",
            "x": 1675,
            "y": 830
        },
        {
            "fill": "purple",
            "id": "1690274703912",
            "name": "b",
            "x": 1673,
            "y": 407
        },
        {
            "fill": "purple",
            "id": "1690274706787",
            "name": "c",
            "x": 1674,
            "y": 187
        },
        {
            "fill": "purple",
            "id": "1690274710764",
            "name": "d",
            "x": 283,
            "y": 169
        },
        {
            "fill": "purple",
            "id": "1690274716746",
            "name": "e",
            "x": 275,
            "y": 842
        },
        {
            "fill": "purple",
            "id": "1690274720410",
            "name": "f",
            "x": 681,
            "y": 840
        },
        {
            "fill": "purple",
            "id": "1690274724488",
            "name": "g",
            "x": 827,
            "y": 843
        },
        {
            "fill": "purple",
            "id": "1690274729690",
            "name": "h",
            "x": 1040,
            "y": 835
        },
        {
            "fill": "purple",
            "id": "1690274733260",
            "name": "i",
            "x": 1468,
            "y": 836
        },
        {
            "fill": "purple",
            "id": "1690274741438",
            "name": "j",
            "x": 1469,
            "y": 599
        },
        {
            "fill": "purple",
            "id": "1690274754128",
            "name": "k",
            "x": 1468,
            "y": 518
        },
        {
            "fill": "purple",
            "id": "1690274789094",
            "name": "l",
            "x": 1470,
            "y": 404
        },
        {
            "fill": "purple",
            "id": "1690274795980",
            "name": "m",
            "x": 1472,
            "y": 255
        },
        {
            "fill": "purple",
            "id": "1690274798945",
            "name": "n",
            "x": 1472,
            "y": 190
        },
        {
            "fill": "purple",
            "id": "1690274803694",
            "name": "o",
            "x": 1045,
            "y": 178
        },
        {
            "fill": "purple",
            "id": "1690274808216",
            "name": "p",
            "x": 822,
            "y": 173
        },
        {
            "fill": "purple",
            "id": "1690274812849",
            "name": "q",
            "x": 683,
            "y": 175
        },
        {
            "fill": "purple",
            "id": "1690274821864",
            "name": "r",
            "x": 536,
            "y": 173
        },
        {
            "fill": "purple",
            "id": "1690274848078",
            "name": "t",
            "x": 534,
            "y": 384
        },
        {
            "fill": "purple",
            "id": "1690274858471",
            "name": "s",
            "x": 270,
            "y": 382
        },
        {
            "fill": "purple",
            "id": "1690274867429",
            "name": "w",
            "x": 278,
            "y": 522
        },
        {
            "fill": "purple",
            "id": "1690274870699",
            "name": "x",
            "x": 282,
            "y": 604
        },
        {
            "fill": "purple",
            "id": "1690274876720",
            "name": "z",
            "x": 275,
            "y": 763
        },
        {
            "fill": "purple",
            "id": "1690274884387",
            "name": "aa",
            "x": 680,
            "y": 393
        },
        {
            "fill": "purple",
            "id": "1690274892913",
            "name": "ab",
            "x": 824,
            "y": 393
        },
        {
            "fill": "purple",
            "id": "1690274897071",
            "name": "ac",
            "x": 1037,
            "y": 394
        },
        {
            "fill": "purple",
            "id": "1690274900913",
            "name": "ad",
            "x": 1042,
            "y": 252
        },
        {
            "fill": "purple",
            "id": "1690274905293",
            "name": "ae",
            "x": 826,
            "y": 247
        },
        {
            "fill": "purple",
            "id": "1690274909394",
            "name": "af",
            "x": 682,
            "y": 245
        },
        {
            "fill": "purple",
            "id": "1690274913237",
            "name": "ag",
            "x": 533,
            "y": 246
        },
        {
            "fill": "purple",
            "id": "1690274917837",
            "name": "ah",
            "x": 278,
            "y": 239
        },
        {
            "fill": "purple",
            "id": "1690274922413",
            "name": "ai",
            "x": 279,
            "y": 304
        },
        {
            "fill": "purple",
            "id": "1690274931307",
            "name": "aj",
            "x": 535,
            "y": 314
        },
        {
            "fill": "purple",
            "id": "1690274944025",
            "name": "ak",
            "x": 901,
            "y": 251
        },
        {
            "fill": "purple",
            "id": "1690274947493",
            "name": "al",
            "x": 898,
            "y": 393
        },
        {
            "fill": "purple",
            "id": "1690274953120",
            "name": "am",
            "x": 1118,
            "y": 183
        },
        {
            "fill": "purple",
            "id": "1690274956416",
            "name": "an",
            "x": 1121,
            "y": 251
        },
        {
            "fill": "purple",
            "id": "1690274962342",
            "name": "ao",
            "x": 1388,
            "y": 254
        },
        {
            "fill": "purple",
            "id": "1690274964698",
            "name": "ap",
            "x": 1391,
            "y": 325
        },
        {
            "fill": "purple",
            "id": "1690274968541",
            "name": "aq",
            "x": 1124,
            "y": 322
        },
        {
            "fill": "purple",
            "id": "1690274976567",
            "name": "as",
            "x": 1119,
            "y": 397
        },
        {
            "fill": "purple",
            "id": "1690274979981",
            "name": "at",
            "x": 1385,
            "y": 400
        },
        {
            "fill": "purple",
            "id": "1690274986366",
            "name": "ar",
            "x": 824,
            "y": 521
        },
        {
            "fill": "purple",
            "id": "1690274989861",
            "name": "aw",
            "x": 1039,
            "y": 523
        },
        {
            "fill": "purple",
            "id": "1690275009430",
            "name": "ax",
            "x": 1261,
            "y": 519
        },
        {
            "fill": "purple",
            "id": "1690275018775",
            "name": "ay",
            "x": 1260,
            "y": 596
        },
        {
            "fill": "purple",
            "id": "1690275022168",
            "name": "az",
            "x": 1046,
            "y": 602
        },
        {
            "fill": "purple",
            "id": "1690275031704",
            "name": "ba",
            "x": 1041,
            "y": 758
        },
        {
            "fill": "purple",
            "id": "1690275036310",
            "name": "bb",
            "x": 1259,
            "y": 760
        },
        {
            "fill": "purple",
            "id": "1690275039062",
            "name": "bc",
            "x": 1257,
            "y": 836
        },
        {
            "fill": "purple",
            "id": "1690275043140",
            "name": "bd",
            "x": 1466,
            "y": 756
        },
        {
            "fill": "purple",
            "id": "1690275047661",
            "name": "be",
            "x": 1391,
            "y": 753
        },
        {
            "fill": "purple",
            "id": "1690275050960",
            "name": "bf",
            "x": 1390,
            "y": 680
        },
        {
            "fill": "purple",
            "id": "1690275056710",
            "name": "bg",
            "x": 1118,
            "y": 680
        },
        {
            "fill": "purple",
            "id": "1690275060221",
            "name": "bh",
            "x": 1117,
            "y": 604
        },
        {
            "fill": "purple",
            "id": "1690275064394",
            "name": "bi",
            "x": 1121,
            "y": 755
        },
        {
            "fill": "purple",
            "id": "1690275068728",
            "name": "bj",
            "x": 1390,
            "y": 601
        },
        {
            "fill": "purple",
            "id": "1690275074542",
            "name": "bk",
            "x": 828,
            "y": 759
        },
        {
            "fill": "purple",
            "id": "1690275080914",
            "name": "bl",
            "x": 684,
            "y": 759
        },
        {
            "fill": "purple",
            "id": "1690275088287",
            "name": "bm",
            "x": 676,
            "y": 523
        },
        {
            "fill": "purple",
            "id": "1690275097067",
            "name": "bn",
            "x": 612,
            "y": 758
        },
        {
            "fill": "purple",
            "id": "1690275102071",
            "name": "bo",
            "x": 609,
            "y": 604
        },
        {
            "fill": "purple",
            "id": "1690275107553",
            "name": "bp",
            "x": 609,
            "y": 524
        },
        {
            "fill": "purple",
            "id": "1690275110588",
            "name": "bq",
            "x": 535,
            "y": 608
        },
        {
            "fill": "purple",
            "id": "1690275114507",
            "name": "br",
            "x": 529,
            "y": 679
        },
        {
            "fill": "purple",
            "id": "1690275117533",
            "name": "bs",
            "x": 528,
            "y": 761
        },
        {
            "fill": "purple",
            "id": "1690275125973",
            "name": "bt",
            "x": 447,
            "y": 601
        },
        {
            "fill": "purple",
            "id": "1690275134913",
            "name": "bw",
            "x": 450,
            "y": 525
        },
        {
            "fill": "purple",
            "id": "1690275143215",
            "name": "bx",
            "x": 448,
            "y": 765
        },
        {
            "fill": "purple",
            "id": "1690275146455",
            "name": "bz",
            "x": 451,
            "y": 842
        },
        {
            "fill": "purple",
            "id": "1690275335977",
            "name": "y",
            "x": 281,
            "y": 684
        }
    ],
    arrLinks: [
        {
            "name": "1",
            "fill": "white",
            "id": "1690275169460",
            "nodeStart": "e",
            "nodeEnd": "z",
            "nodes": [
                "e",
                "z"
            ],
            "fromX": 275,
            "fromY": 842,
            "toX": 275,
            "toY": 763,
            "distance": 8.89
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275182391",
            "nodeStart": "e",
            "nodeEnd": "bz",
            "nodes": [
                "e",
                "bz"
            ],
            "fromX": 275,
            "fromY": 842,
            "toX": 451,
            "toY": 842,
            "distance": 13.42
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275186179",
            "nodeStart": "bx",
            "nodeEnd": "bz",
            "nodes": [
                "bx",
                "bz"
            ],
            "fromX": 448,
            "fromY": 765,
            "toX": 451,
            "toY": 842,
            "distance": 8.94
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275190076",
            "nodeStart": "z",
            "nodeEnd": "bx",
            "nodes": [
                "z",
                "bx"
            ],
            "fromX": 275,
            "fromY": 763,
            "toX": 448,
            "toY": 765,
            "distance": 13.38
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275194291",
            "nodeStart": "f",
            "nodeEnd": "bz",
            "nodes": [
                "f",
                "bz"
            ],
            "fromX": 681,
            "fromY": 840,
            "toX": 451,
            "toY": 842,
            "distance": 15.23
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275199039",
            "nodeStart": "f",
            "nodeEnd": "bl",
            "nodes": [
                "f",
                "bl"
            ],
            "fromX": 681,
            "fromY": 840,
            "toX": 684,
            "toY": 759,
            "distance": 9.17
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275203433",
            "nodeStart": "f",
            "nodeEnd": "g",
            "nodes": [
                "f",
                "g"
            ],
            "fromX": 681,
            "fromY": 840,
            "toX": 827,
            "toY": 843,
            "distance": 12.04
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275208179",
            "nodeStart": "g",
            "nodeEnd": "bk",
            "nodes": [
                "g",
                "bk"
            ],
            "fromX": 827,
            "fromY": 843,
            "toX": 828,
            "toY": 759,
            "distance": 9.43
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275211732",
            "nodeStart": "bk",
            "nodeEnd": "bl",
            "nodes": [
                "bk",
                "bl"
            ],
            "fromX": 828,
            "fromY": 759,
            "toX": 684,
            "toY": 759,
            "distance": 12.17
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275215874",
            "nodeStart": "bs",
            "nodeEnd": "bx",
            "nodes": [
                "bs",
                "bx"
            ],
            "fromX": 528,
            "fromY": 761,
            "toX": 448,
            "toY": 765,
            "distance": 9.17
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275219200",
            "nodeStart": "bn",
            "nodeEnd": "bs",
            "nodes": [
                "bn",
                "bs"
            ],
            "fromX": 612,
            "fromY": 758,
            "toX": 528,
            "toY": 761,
            "distance": 9.33
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275222789",
            "nodeStart": "bl",
            "nodeEnd": "bn",
            "nodes": [
                "bl",
                "bn"
            ],
            "fromX": 684,
            "fromY": 759,
            "toX": 612,
            "toY": 758,
            "distance": 8.77
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275339554",
            "nodeStart": "z",
            "nodeEnd": "y",
            "nodes": [
                "z",
                "y"
            ],
            "fromX": 275,
            "fromY": 763,
            "toX": 281,
            "toY": 684,
            "distance": 9
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275342640",
            "nodeStart": "x",
            "nodeEnd": "y",
            "nodes": [
                "x",
                "y"
            ],
            "fromX": 282,
            "fromY": 604,
            "toX": 281,
            "toY": 684,
            "distance": 9
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275353888",
            "nodeStart": "x",
            "nodeEnd": "bt",
            "nodes": [
                "x",
                "bt"
            ],
            "fromX": 282,
            "fromY": 604,
            "toX": 447,
            "toY": 601,
            "distance": 12.96
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275357490",
            "nodeStart": "bq",
            "nodeEnd": "bt",
            "nodes": [
                "bq",
                "bt"
            ],
            "fromX": 535,
            "fromY": 608,
            "toX": 447,
            "toY": 601,
            "distance": 9.75
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275360773",
            "nodeStart": "bq",
            "nodeEnd": "br",
            "nodes": [
                "bq",
                "br"
            ],
            "fromX": 535,
            "fromY": 608,
            "toX": 529,
            "toY": 679,
            "distance": 8.54
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275364177",
            "nodeStart": "br",
            "nodeEnd": "y",
            "nodes": [
                "br",
                "y"
            ],
            "fromX": 529,
            "fromY": 679,
            "toX": 281,
            "toY": 684,
            "distance": 16.03
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275367130",
            "nodeStart": "br",
            "nodeEnd": "bs",
            "nodes": [
                "br",
                "bs"
            ],
            "fromX": 529,
            "fromY": 679,
            "toX": 528,
            "toY": 761,
            "distance": 9.33
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275370822",
            "nodeStart": "bn",
            "nodeEnd": "bo",
            "nodes": [
                "bn",
                "bo"
            ],
            "fromX": 612,
            "fromY": 758,
            "toX": 609,
            "toY": 604,
            "distance": 12.37
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275375492",
            "nodeStart": "w",
            "nodeEnd": "x",
            "nodes": [
                "w",
                "x"
            ],
            "fromX": 278,
            "fromY": 522,
            "toX": 282,
            "toY": 604,
            "distance": 9.49
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275387325",
            "nodeStart": "w",
            "nodeEnd": "bw",
            "nodes": [
                "w",
                "bw"
            ],
            "fromX": 278,
            "fromY": 522,
            "toX": 450,
            "toY": 525,
            "distance": 13.23
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275393390",
            "nodeStart": "bt",
            "nodeEnd": "bw",
            "nodes": [
                "bt",
                "bw"
            ],
            "fromX": 447,
            "fromY": 601,
            "toX": 450,
            "toY": 525,
            "distance": 8.89
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275411757",
            "nodeStart": "bp",
            "nodeEnd": "bw",
            "nodes": [
                "bp",
                "bw"
            ],
            "fromX": 609,
            "fromY": 524,
            "toX": 450,
            "toY": 525,
            "distance": 12.65
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275415683",
            "nodeStart": "bo",
            "nodeEnd": "bp",
            "nodes": [
                "bo",
                "bp"
            ],
            "fromX": 609,
            "fromY": 604,
            "toX": 609,
            "toY": 524,
            "distance": 9.17
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275419465",
            "nodeStart": "bo",
            "nodeEnd": "bq",
            "nodes": [
                "bo",
                "bq"
            ],
            "fromX": 609,
            "fromY": 604,
            "toX": 535,
            "toY": 608,
            "distance": 8.6
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275425294",
            "nodeStart": "s",
            "nodeEnd": "w",
            "nodes": [
                "s",
                "w"
            ],
            "fromX": 270,
            "fromY": 382,
            "toX": 278,
            "toY": 522,
            "distance": 12.17
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275429117",
            "nodeStart": "s",
            "nodeEnd": "ai",
            "nodes": [
                "s",
                "ai"
            ],
            "fromX": 270,
            "fromY": 382,
            "toX": 279,
            "toY": 304,
            "distance": 9.33
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275432965",
            "nodeStart": "t",
            "nodeEnd": "s",
            "nodes": [
                "t",
                "s"
            ],
            "fromX": 534,
            "fromY": 384,
            "toX": 270,
            "toY": 382,
            "distance": 16.31
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275436693",
            "nodeStart": "t",
            "nodeEnd": "aa",
            "nodes": [
                "t",
                "aa"
            ],
            "fromX": 534,
            "fromY": 384,
            "toX": 680,
            "toY": 393,
            "distance": 12.45
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275440493",
            "nodeStart": "aa",
            "nodeEnd": "bm",
            "nodes": [
                "aa",
                "bm"
            ],
            "fromX": 680,
            "fromY": 393,
            "toX": 676,
            "toY": 523,
            "distance": 11.75
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275444347",
            "nodeStart": "bm",
            "nodeEnd": "bp",
            "nodes": [
                "bm",
                "bp"
            ],
            "fromX": 676,
            "fromY": 523,
            "toX": 609,
            "toY": 524,
            "distance": 8.25
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275448080",
            "nodeStart": "bl",
            "nodeEnd": "bm",
            "nodes": [
                "bl",
                "bm"
            ],
            "fromX": 684,
            "fromY": 759,
            "toX": 676,
            "toY": 523,
            "distance": 15.75
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275473999",
            "nodeStart": "ar",
            "nodeEnd": "bm",
            "nodes": [
                "ar",
                "bm"
            ],
            "fromX": 824,
            "fromY": 521,
            "toX": 676,
            "toY": 523,
            "distance": 12.41
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275478219",
            "nodeStart": "ar",
            "nodeEnd": "bk",
            "nodes": [
                "ar",
                "bk"
            ],
            "fromX": 824,
            "fromY": 521,
            "toX": 828,
            "toY": 759,
            "distance": 15.68
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275481894",
            "nodeStart": "ab",
            "nodeEnd": "ar",
            "nodes": [
                "ab",
                "ar"
            ],
            "fromX": 824,
            "fromY": 393,
            "toX": 824,
            "toY": 521,
            "distance": 11.31
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275485794",
            "nodeStart": "aa",
            "nodeEnd": "ab",
            "nodes": [
                "aa",
                "ab"
            ],
            "fromX": 680,
            "fromY": 393,
            "toX": 824,
            "toY": 393,
            "distance": 12.17
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275489901",
            "nodeStart": "ai",
            "nodeEnd": "aj",
            "nodes": [
                "ai",
                "aj"
            ],
            "fromX": 279,
            "fromY": 304,
            "toX": 535,
            "toY": 314,
            "distance": 16.43
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275492999",
            "nodeStart": "t",
            "nodeEnd": "aj",
            "nodes": [
                "t",
                "aj"
            ],
            "fromX": 534,
            "fromY": 384,
            "toX": 535,
            "toY": 314,
            "distance": 8.43
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275496726",
            "nodeStart": "ah",
            "nodeEnd": "ai",
            "nodes": [
                "ah",
                "ai"
            ],
            "fromX": 278,
            "fromY": 239,
            "toX": 279,
            "toY": 304,
            "distance": 8.37
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275500610",
            "nodeStart": "ag",
            "nodeEnd": "ah",
            "nodes": [
                "ag",
                "ah"
            ],
            "fromX": 533,
            "fromY": 246,
            "toX": 278,
            "toY": 239,
            "distance": 16.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275504044",
            "nodeStart": "d",
            "nodeEnd": "ah",
            "nodes": [
                "d",
                "ah"
            ],
            "fromX": 283,
            "fromY": 169,
            "toX": 278,
            "toY": 239,
            "distance": 8.89
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275507597",
            "nodeStart": "d",
            "nodeEnd": "r",
            "nodes": [
                "d",
                "r"
            ],
            "fromX": 283,
            "fromY": 169,
            "toX": 536,
            "toY": 173,
            "distance": 16.03
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275511655",
            "nodeStart": "r",
            "nodeEnd": "ag",
            "nodes": [
                "r",
                "ag"
            ],
            "fromX": 536,
            "fromY": 173,
            "toX": 533,
            "toY": 246,
            "distance": 8.72
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275515335",
            "nodeStart": "ag",
            "nodeEnd": "aj",
            "nodes": [
                "ag",
                "aj"
            ],
            "fromX": 533,
            "fromY": 246,
            "toX": 535,
            "toY": 314,
            "distance": 8.12
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275519357",
            "nodeStart": "q",
            "nodeEnd": "r",
            "nodes": [
                "q",
                "r"
            ],
            "fromX": 683,
            "fromY": 175,
            "toX": 536,
            "toY": 173,
            "distance": 12.04
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275523529",
            "nodeStart": "q",
            "nodeEnd": "af",
            "nodes": [
                "q",
                "af"
            ],
            "fromX": 683,
            "fromY": 175,
            "toX": 682,
            "toY": 245,
            "distance": 8.66
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275527414",
            "nodeStart": "aa",
            "nodeEnd": "af",
            "nodes": [
                "aa",
                "af"
            ],
            "fromX": 680,
            "fromY": 393,
            "toX": 682,
            "toY": 245,
            "distance": 12.25
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275531982",
            "nodeStart": "p",
            "nodeEnd": "q",
            "nodes": [
                "p",
                "q"
            ],
            "fromX": 822,
            "fromY": 173,
            "toX": 683,
            "toY": 175,
            "distance": 11.87
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275535931",
            "nodeStart": "p",
            "nodeEnd": "ae",
            "nodes": [
                "p",
                "ae"
            ],
            "fromX": 822,
            "fromY": 173,
            "toX": 826,
            "toY": 247,
            "distance": 9.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275542938",
            "nodeStart": "ae",
            "nodeEnd": "af",
            "nodes": [
                "ae",
                "af"
            ],
            "fromX": 826,
            "fromY": 247,
            "toX": 682,
            "toY": 245,
            "distance": 12.08
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275547523",
            "nodeStart": "ab",
            "nodeEnd": "ae",
            "nodes": [
                "ab",
                "ae"
            ],
            "fromX": 824,
            "fromY": 393,
            "toX": 826,
            "toY": 247,
            "distance": 12
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275579440",
            "nodeStart": "ab",
            "nodeEnd": "al",
            "nodes": [
                "ab",
                "al"
            ],
            "fromX": 824,
            "fromY": 393,
            "toX": 898,
            "toY": 393,
            "distance": 8.6
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275582748",
            "nodeStart": "ae",
            "nodeEnd": "ak",
            "nodes": [
                "ae",
                "ak"
            ],
            "fromX": 826,
            "fromY": 247,
            "toX": 901,
            "toY": 251,
            "distance": 8.66
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275586237",
            "nodeStart": "ak",
            "nodeEnd": "al",
            "nodes": [
                "ak",
                "al"
            ],
            "fromX": 901,
            "fromY": 251,
            "toX": 898,
            "toY": 393,
            "distance": 12.04
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275589999",
            "nodeStart": "ar",
            "nodeEnd": "aw",
            "nodes": [
                "ar",
                "aw"
            ],
            "fromX": 824,
            "fromY": 521,
            "toX": 1039,
            "toY": 523,
            "distance": 14.73
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275593481",
            "nodeStart": "g",
            "nodeEnd": "h",
            "nodes": [
                "g",
                "h"
            ],
            "fromX": 827,
            "fromY": 843,
            "toX": 1040,
            "toY": 835,
            "distance": 15
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275597149",
            "nodeStart": "ba",
            "nodeEnd": "bk",
            "nodes": [
                "ba",
                "bk"
            ],
            "fromX": 1041,
            "fromY": 758,
            "toX": 828,
            "toY": 759,
            "distance": 14.76
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275601585",
            "nodeStart": "aw",
            "nodeEnd": "az",
            "nodes": [
                "aw",
                "az"
            ],
            "fromX": 1039,
            "fromY": 523,
            "toX": 1045,
            "toY": 602,
            "distance": 9.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275607336",
            "nodeStart": "az",
            "nodeEnd": "ba",
            "nodes": [
                "az",
                "ba"
            ],
            "fromX": 1045,
            "fromY": 602,
            "toX": 1041,
            "toY": 758,
            "distance": 12.85
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275610812",
            "nodeStart": "h",
            "nodeEnd": "ba",
            "nodes": [
                "h",
                "ba"
            ],
            "fromX": 1040,
            "fromY": 835,
            "toX": 1041,
            "toY": 758,
            "distance": 9.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275614479",
            "nodeStart": "ba",
            "nodeEnd": "bi",
            "nodes": [
                "ba",
                "bi"
            ],
            "fromX": 1041,
            "fromY": 758,
            "toX": 1121,
            "toY": 755,
            "distance": 9.11
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275710430",
            "nodeStart": "bg",
            "nodeEnd": "bi",
            "nodes": [
                "bg",
                "bi"
            ],
            "fromX": 1118,
            "fromY": 680,
            "toX": 1121,
            "toY": 755,
            "distance": 8.6
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275715532",
            "nodeStart": "bb",
            "nodeEnd": "bi",
            "nodes": [
                "bb",
                "bi"
            ],
            "fromX": 1259,
            "fromY": 760,
            "toX": 1121,
            "toY": 755,
            "distance": 11.96
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275718905",
            "nodeStart": "bb",
            "nodeEnd": "bc",
            "nodes": [
                "bb",
                "bc"
            ],
            "fromX": 1259,
            "fromY": 760,
            "toX": 1257,
            "toY": 836,
            "distance": 8.6
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275722567",
            "nodeStart": "bb",
            "nodeEnd": "be",
            "nodes": [
                "bb",
                "be"
            ],
            "fromX": 1259,
            "fromY": 760,
            "toX": 1391,
            "toY": 753,
            "distance": 11.79
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275726222",
            "nodeStart": "be",
            "nodeEnd": "bf",
            "nodes": [
                "be",
                "bf"
            ],
            "fromX": 1391,
            "fromY": 753,
            "toX": 1390,
            "toY": 680,
            "distance": 8.83
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275730280",
            "nodeStart": "h",
            "nodeEnd": "bc",
            "nodes": [
                "h",
                "bc"
            ],
            "fromX": 1040,
            "fromY": 835,
            "toX": 1257,
            "toY": 836,
            "distance": 14.9
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275733768",
            "nodeStart": "i",
            "nodeEnd": "bc",
            "nodes": [
                "i",
                "bc"
            ],
            "fromX": 1468,
            "fromY": 836,
            "toX": 1257,
            "toY": 836,
            "distance": 14.53
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275737460",
            "nodeStart": "i",
            "nodeEnd": "bd",
            "nodes": [
                "i",
                "bd"
            ],
            "fromX": 1468,
            "fromY": 836,
            "toX": 1466,
            "toY": 756,
            "distance": 9.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275741140",
            "nodeStart": "j",
            "nodeEnd": "bd",
            "nodes": [
                "j",
                "bd"
            ],
            "fromX": 1469,
            "fromY": 599,
            "toX": 1466,
            "toY": 756,
            "distance": 12.65
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275744784",
            "nodeStart": "j",
            "nodeEnd": "bj",
            "nodes": [
                "j",
                "bj"
            ],
            "fromX": 1469,
            "fromY": 599,
            "toX": 1390,
            "toY": 601,
            "distance": 9
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275749124",
            "nodeStart": "a",
            "nodeEnd": "i",
            "nodes": [
                "a",
                "i"
            ],
            "fromX": 1675,
            "fromY": 830,
            "toX": 1468,
            "toY": 836,
            "distance": 14.59
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275753308",
            "nodeStart": "a",
            "nodeEnd": "b",
            "nodes": [
                "a",
                "b"
            ],
            "fromX": 1675,
            "fromY": 830,
            "toX": 1673,
            "toY": 407,
            "distance": 20.52
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275757354",
            "nodeStart": "b",
            "nodeEnd": "c",
            "nodes": [
                "b",
                "c"
            ],
            "fromX": 1673,
            "fromY": 407,
            "toX": 1674,
            "toY": 187,
            "distance": 15
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275761075",
            "nodeStart": "b",
            "nodeEnd": "l",
            "nodes": [
                "b",
                "l"
            ],
            "fromX": 1673,
            "fromY": 407,
            "toX": 1470,
            "toY": 404,
            "distance": 14.21
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275838222",
            "nodeStart": "bf",
            "nodeEnd": "bj",
            "nodes": [
                "bf",
                "bj"
            ],
            "fromX": 1390,
            "fromY": 680,
            "toX": 1390,
            "toY": 601,
            "distance": 8.89
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275842196",
            "nodeStart": "ay",
            "nodeEnd": "bj",
            "nodes": [
                "ay",
                "bj"
            ],
            "fromX": 1260,
            "fromY": 596,
            "toX": 1390,
            "toY": 601,
            "distance": 11.62
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275848740",
            "nodeStart": "ay",
            "nodeEnd": "bh",
            "nodes": [
                "ay",
                "bh"
            ],
            "fromX": 1260,
            "fromY": 596,
            "toX": 1117,
            "toY": 604,
            "distance": 12.12
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275852840",
            "nodeStart": "bg",
            "nodeEnd": "bh",
            "nodes": [
                "bg",
                "bh"
            ],
            "fromX": 1118,
            "fromY": 680,
            "toX": 1117,
            "toY": 604,
            "distance": 9
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275859521",
            "nodeStart": "bf",
            "nodeEnd": "bg",
            "nodes": [
                "bf",
                "bg"
            ],
            "fromX": 1390,
            "fromY": 680,
            "toX": 1118,
            "toY": 680,
            "distance": 16.61
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275863093",
            "nodeStart": "az",
            "nodeEnd": "bh",
            "nodes": [
                "az",
                "bh"
            ],
            "fromX": 1046,
            "fromY": 602,
            "toX": 1117,
            "toY": 604,
            "distance": 8.54
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275866923",
            "nodeStart": "aw",
            "nodeEnd": "ax",
            "nodes": [
                "aw",
                "ax"
            ],
            "fromX": 1039,
            "fromY": 523,
            "toX": 1261,
            "toY": 519,
            "distance": 15.03
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275870813",
            "nodeStart": "ax",
            "nodeEnd": "ay",
            "nodes": [
                "ax",
                "ay"
            ],
            "fromX": 1261,
            "fromY": 519,
            "toX": 1260,
            "toY": 596,
            "distance": 9.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275874780",
            "nodeStart": "k",
            "nodeEnd": "ax",
            "nodes": [
                "k",
                "ax"
            ],
            "fromX": 1468,
            "fromY": 518,
            "toX": 1261,
            "toY": 519,
            "distance": 14.42
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275878694",
            "nodeStart": "k",
            "nodeEnd": "l",
            "nodes": [
                "k",
                "l"
            ],
            "fromX": 1468,
            "fromY": 518,
            "toX": 1470,
            "toY": 404,
            "distance": 10.58
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275883653",
            "nodeStart": "j",
            "nodeEnd": "k",
            "nodes": [
                "j",
                "k"
            ],
            "fromX": 1469,
            "fromY": 599,
            "toX": 1468,
            "toY": 518,
            "distance": 9.27
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275888401",
            "nodeStart": "l",
            "nodeEnd": "at",
            "nodes": [
                "l",
                "at"
            ],
            "fromX": 1470,
            "fromY": 404,
            "toX": 1385,
            "toY": 400,
            "distance": 9.64
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275892867",
            "nodeStart": "as",
            "nodeEnd": "at",
            "nodes": [
                "as",
                "at"
            ],
            "fromX": 1119,
            "fromY": 397,
            "toX": 1385,
            "toY": 400,
            "distance": 16.28
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275896607",
            "nodeStart": "ac",
            "nodeEnd": "as",
            "nodes": [
                "ac",
                "as"
            ],
            "fromX": 1037,
            "fromY": 394,
            "toX": 1119,
            "toY": 397,
            "distance": 9
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275900130",
            "nodeStart": "ac",
            "nodeEnd": "al",
            "nodes": [
                "ac",
                "al"
            ],
            "fromX": 1037,
            "fromY": 394,
            "toX": 898,
            "toY": 393,
            "distance": 11.83
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275903882",
            "nodeStart": "ad",
            "nodeEnd": "ak",
            "nodes": [
                "ad",
                "ak"
            ],
            "fromX": 1042,
            "fromY": 252,
            "toX": 901,
            "toY": 251,
            "distance": 12.08
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275907994",
            "nodeStart": "ac",
            "nodeEnd": "ad",
            "nodes": [
                "ac",
                "ad"
            ],
            "fromX": 1037,
            "fromY": 394,
            "toX": 1042,
            "toY": 252,
            "distance": 12.12
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275911403",
            "nodeStart": "aq",
            "nodeEnd": "as",
            "nodes": [
                "aq",
                "as"
            ],
            "fromX": 1124,
            "fromY": 322,
            "toX": 1119,
            "toY": 397,
            "distance": 8.94
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275914561",
            "nodeStart": "an",
            "nodeEnd": "aq",
            "nodes": [
                "an",
                "aq"
            ],
            "fromX": 1121,
            "fromY": 251,
            "toX": 1124,
            "toY": 322,
            "distance": 8.37
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275918433",
            "nodeStart": "ap",
            "nodeEnd": "aq",
            "nodes": [
                "ap",
                "aq"
            ],
            "fromX": 1391,
            "fromY": 325,
            "toX": 1124,
            "toY": 322,
            "distance": 16.31
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275922106",
            "nodeStart": "ap",
            "nodeEnd": "at",
            "nodes": [
                "ap",
                "at"
            ],
            "fromX": 1391,
            "fromY": 325,
            "toX": 1385,
            "toY": 400,
            "distance": 8.77
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275925817",
            "nodeStart": "ao",
            "nodeEnd": "ap",
            "nodes": [
                "ao",
                "ap"
            ],
            "fromX": 1388,
            "fromY": 254,
            "toX": 1391,
            "toY": 325,
            "distance": 8.37
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275929808",
            "nodeStart": "am",
            "nodeEnd": "an",
            "nodes": [
                "am",
                "an"
            ],
            "fromX": 1118,
            "fromY": 183,
            "toX": 1121,
            "toY": 251,
            "distance": 8.19
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275933914",
            "nodeStart": "o",
            "nodeEnd": "ad",
            "nodes": [
                "o",
                "ad"
            ],
            "fromX": 1045,
            "fromY": 178,
            "toX": 1042,
            "toY": 252,
            "distance": 8.77
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275938494",
            "nodeStart": "o",
            "nodeEnd": "p",
            "nodes": [
                "o",
                "p"
            ],
            "fromX": 1045,
            "fromY": 178,
            "toX": 822,
            "toY": 173,
            "distance": 15.1
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275942786",
            "nodeStart": "o",
            "nodeEnd": "am",
            "nodes": [
                "o",
                "am"
            ],
            "fromX": 1045,
            "fromY": 178,
            "toX": 1118,
            "toY": 183,
            "distance": 9.06
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275947090",
            "nodeStart": "n",
            "nodeEnd": "am",
            "nodes": [
                "n",
                "am"
            ],
            "fromX": 1472,
            "fromY": 190,
            "toX": 1118,
            "toY": 183,
            "distance": 18.89
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275952930",
            "nodeStart": "an",
            "nodeEnd": "ao",
            "nodes": [
                "an",
                "ao"
            ],
            "fromX": 1121,
            "fromY": 251,
            "toX": 1388,
            "toY": 254,
            "distance": 16.31
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275956994",
            "nodeStart": "m",
            "nodeEnd": "ao",
            "nodes": [
                "m",
                "ao"
            ],
            "fromX": 1472,
            "fromY": 255,
            "toX": 1388,
            "toY": 254,
            "distance": 9.43
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275960813",
            "nodeStart": "l",
            "nodeEnd": "m",
            "nodes": [
                "l",
                "m"
            ],
            "fromX": 1470,
            "fromY": 404,
            "toX": 1472,
            "toY": 255,
            "distance": 12.29
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275967182",
            "nodeStart": "m",
            "nodeEnd": "n",
            "nodes": [
                "m",
                "n"
            ],
            "fromX": 1472,
            "fromY": 255,
            "toX": 1472,
            "toY": 190,
            "distance": 8.31
        },
        {
            "name": "1",
            "fill": "white",
            "id": "1690275972350",
            "nodeStart": "c",
            "nodeEnd": "n",
            "nodes": [
                "c",
                "n"
            ],
            "fromX": 1674,
            "fromY": 187,
            "toX": 1472,
            "toY": 190,
            "distance": 14.18
        }
    ],
    selectNodes: [],
    addSelectNode: (id) => set((state: Graph) => {
        if (state.selectNodes.length == 2) {
            const a = state.arrNodes.filter((node: Node) => node.id == state.selectNodes[0] || node.id == state.selectNodes[1])
            const newLink: Link = {
                name: '1',
                fill: 'white',
                id: String(Date.now()),
                nodeStart: a[0].name,
                nodeEnd: a[1].name,
                nodes: [a[0].name, a[1].name],
                fromX: a[0].x,
                fromY: a[0].y,
                toX: a[1].x,
                toY: a[1].y,
                distance: distance({ x1: a[0].x, y1: a[0].y, x2: a[1].x, y2: a[1].y })
            }
            toast.success('Conexion creada!')
            return ({ ...state, isConecte: false, selectNodes: [], arrLinks: [...state.arrLinks, newLink] })
        }
        return ({ ...state, selectNodes: [...state.selectNodes, id] })
    }),
    addNode: (node) => set((state: Graph) => ({ ...state, arrNodes: [...state.arrNodes, node] })),
    addLink: (link) => set((state: Graph) => ({ ...state, arrLinks: [...state.arrLinks, link] })),
    removeNode: (id) => set((state: Graph) => ({ ...state, arrNodes: state.arrNodes.filter((node: Node) => node.id !== id) })),
    removeLink: (name) => set((state: Graph) => ({ ...state, arrLinks: state.arrLinks.filter((link: Link) => !link.nodes.includes(name)) })),
    updateNode: (id, props) => set((state: Graph) => ({
        ...state, arrNodes: state.arrNodes.map(
            (node: Node) => node.id == id ? ({ ...node, ...props }) : node)
    })),
    updateLink: (id, props) => set((state: Graph) => ({
        ...state, arrLinks: state.arrLinks.map((link: Link) => link.id == id ? ({ ...link, ...props }) : link)
    })),
    updateNodePosition: (id, props) => set((state: Graph) => ({
        ...state, arrNodes: state.arrNodes.map(
            (node: Node) => node.id == id ? ({ ...node, ...props }) : node)
    })),
    updateLinkPosition: (id, props) => set((state: Graph) => ({
        ...state, arrLinks: state.arrLinks.map(
            (link: Link) => link.id == id ? ({ ...link, ...props }) : link)
    }))

}))

export default useGraph