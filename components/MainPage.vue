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

        <v-dialog v-model="detail" width="500">
          <v-card class="text-center container" color="#04B640">
            <v-col>
              <v-row class="justify-end">
                <div >
                  <v-icon
                    dark
                    class="mr-4 d-flex align-end"
                    @click="detail = false"
                    >mdi-close</v-icon
                  >
                </div>
              </v-row>
              <v-row>
                <v-col>
                  <v-card-text dark>
                    <p class="text-h4 text--primary" dark>ต้องการเรียกใช้บริการ <br />
                    รถขนสิ่งปฏิกูลใช่หรือไม่</p>
                    <p dark>คุณ {{pfrequest.namepeople}} <br /> 
                    โทรศัพท์ {{pfrequest.telpeople}}</p>
                    <div class="text--primary" dark>
                      ชื่อและประเภทอาคาร {{addrequest.buildtype}}<br />
                      ที่อยู่ {{addrequest.addpeople}} ตำบล {{addrequest.subarea}} อำเภอ {{addrequest.area}} 
                      จังหวัด {{addrequest.province}} {{addrequest.postalcode}}
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn rounded color="#3CF60D" @click="rqcar" > ยืนยัน </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-dialog>

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
    detail: false,
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
      // this.$router.push("/rqcar")

      this.detail = true;
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
