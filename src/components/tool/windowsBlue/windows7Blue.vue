<template>
    <div class="windows7Blue">
        <p>A problem has been detected and windows has been shut down to prevent damageto your computer .</p>
        <br>
        <p>The problem seems to be caused by the following file: atikmdag.sys</p>
        <br>
        <br>
        <p>If this is the first time you've seen this stop error screen,restart your computer. If this screen appears
            again, follow these steps:</p>
        <br>
        <p>Check to make sure any_new hardware or software is properly installed.If this is a new instal1ation，ask your
            hardware or software manufacturerfor any windows updates you might need.</p>
        <br>
        <p>If problems continue，disable or remove any newly installed hardwareor software.Disable BIOS memory options
            such as caching or shadowing.If you need to use safe mode to remove or disable components,restartyour
            computer,press F8 to select Advanced Startup options,and thenselect safe Mode.</p>
        <br>
        <p>Technical Information:</p>
        <br>
        <p>*** STOP:0xa0000001 (0x00000005，0x00000000，0x00000000，0x00000000)</p>
        <br>
        <p>*** atikmdag.sys - Address 0x9683f6f9 base at 0x96823000 DateStamp 0x52a23e98</p>
    </div>
</template>

<style scoped>
@font-face {
    font-family: "MS";
    src: url("@/components/tool/windowsBlue/MSGOTHIC.TTF");
}

div {
    width: 100vw;
    height: 100vh;
    background-color: #0000FF;
    color: #FFFFFF;
    font-family: "Microsoft Yahei";
    font-size: 20px;
    line-height: 30px;
    font-family: MS;
}
</style>