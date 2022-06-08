<template>
  <v-card>
    <v-app-bar
      dark
      height="200px"
      color="#04B640"
      class=""
      style="border-radius: 0px 0px 125px 125px"
    >
      <v-toolbar-title style="margin-left: 30px; padding: auto" class="text-h5"
        >บริการเรียกใช้รถขนสิ่งปฏิกูล</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        x-large
        style="margin-right: auto"
        @click="profilep"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12" class="mgt">
          <v-card
            color="#04B640"
            dark
            class="pa-4 text-no-wrap rounded-xl"
            @click="gorequestc"
          >
            <div class="d-flex align-center">
              <div class="col-7">
                <!-- <v-card-title></v-card-title> -->

                <v-card-title class="text-h4 mb-10 mt-10">
                  เรียกใช้บริการรถขนสิ่งปฏิกูล
                </v-card-title>
              </div>
              <v-spacer></v-spacer>
              <v-avatar
                class="ma-10 mr-4 text-right mx-auto"
                tile
                width="150"
                height="100"
              >
                <img src="@/assets/1.png" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        

        <v-col cols="12" class="mgt">
          <v-card color="#04B640" dark class="rounded-xl">
            <div class="d-flex justify-center mb-6">
              <v-card-title class="text-h4 mb-15 mt-15">
                ประวัติการเรียกใช้บริการ
              </v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    
    pfrequest: {
        namepeople: "ฟ้า เอบีซี",  
        telpeople: "065-6588598",
      },
      addrequest:{
        buildtype: "บ้านเดี่ยว",
        addpeople: "159 ม.4 ",
        subarea: "สันทรายหลวง",
        area: "สันทราย",
        province: "เชียงใหม่",
        postalcode: "58000",

      },
  }),
  methods: {
    gorequestc() {
      this.$router.push("/requestc")

     
    },
    profilep() {
      this.$router.push("/profilep");
    },
    rqcar() {
      this.$router.push("/rqcar");
    },
  },
};
</script>

<style>
.mgt {
  margin-top: 15px;
}
</style>
