<template>
    <div class = "hello">
        <h1>{{ msg }}</h1>
        <Select v-model = "model1" style = "width:200px">
            <Option v-for = "item in cityList" :value = "item.value" :key = "item.value">{{ item.label }}</Option>
        </Select>
    </div>

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },

    data() {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: "",

        };
    },
    mounted() {
        this.model1 = this.cityList[0].value;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
