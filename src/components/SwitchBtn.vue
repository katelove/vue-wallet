<template>
    <div class="inline-block switch">
        <input
            type="checkbox"
            class="w-9 h-15px cursor-pointer relative appearance-none outline-none rounded-10px input-time"
            :checkded="checked"
            @change="$emit('change',$event.target.checked)"
        >
    </div>
</template>

<script>

export default {
    name: 'SwitchBtn',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    }
};
</script>

<style>
.input-time{
  transition: .5s;
}

.switch input:before{
  content: '';
  position:absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: 1px;
  left: 0;
  background: white;
  transition: .5s;
}

.switch input:checked[type="checkbox"]:before{
  left: 22px;
}

.switch input:checked[type="checkbox"]{
  background: #33ADD6;
}

.switch input[type="checkbox"]{
 background: #969696;
}

</style>
