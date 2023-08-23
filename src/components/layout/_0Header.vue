<script lang="ts">
export default {
	data() {
		return {
			LogoLink: "Https://www.google.com",
		};
	},
};
</script>
<template lang="pug">
header(class="border-[var(--dark200)] border-b w-full flex items-center p-2 select-none h-[var(--HeaderHeight)] bg-[var(--dark300)]" style="-webkit-app-region: drag;")
    //- Logo
    a(class="ml-4 text-xl outline-none text-[var(--favColor)]" :href="LogoLink" style="-webkit-app-region: no-drag") LyeApp #[span(class="text-xs opacity-70") v1.0]

    //- User Section
    div(class="ml-auto flex items-center justify-center" style="-webkit-app-region: no-drag")
        ul(class="ml-2 h-9 p-1 rounded-full flex items-center justify-center bg-[var(--dark200)] border-[var(--favColor)]" id="favColorsUL")
            li(data-color="var(--blue)"   class="duration-200 hover:scale-95 cursor-pointer h-6 w-6 rounded-full m-1 border-2 border-solid border-[var(--white)] bg-[var(--blue)]")
            li(data-color="var(--sky)"    class="duration-200 hover:scale-95 cursor-pointer h-6 w-6 rounded-full m-1 border-2 border-solid border-[var(--white)] bg-[var(--sky)]")
            li(data-color="var(--purple)" class="duration-200 hover:scale-95 cursor-pointer h-6 w-6 rounded-full m-1 border-2 border-solid border-[var(--white)] bg-[var(--purple)]")
            li(data-color="var(--green)"  class="duration-200 hover:scale-95 cursor-pointer h-6 w-6 rounded-full m-1 border-2 border-solid border-[var(--white)] bg-[var(--green)]")
            li(data-color="var(--yellow)" class="duration-200 hover:scale-95 scale-125 mx-2 cursor-pointer h-6 w-6 rounded-full m-1 border-2 border-solid border-[var(--white)] bg-[var(--yellow)]")
            li(data-color="var(--pink)"   class="duration-200 hover:scale-95 cursor-pointer h-6 w-6 rounded-full m-1 border-2 border-solid border-[var(--white)] bg-[var(--pink)]")
    //- Main App Fram
    div(class="h-7 ml-5 flex items-center justify-center" style="-webkit-app-region: no-drag")
        button(class="duration-150 hover:opacity-50 w-7 rounded-md h-7 mx-1 bg-yellow-400" id="minimize")
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        button(class="duration-150 hover:opacity-50 w-7 rounded-md h-7 mx-1 bg-green-400" id="maximize")
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        button(class="duration-150 hover:opacity-50 w-7 rounded-md h-7 mx-1 bg-red-400" id="closeBtn")
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="29" width="29"><path fill="#000" d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
</template>
