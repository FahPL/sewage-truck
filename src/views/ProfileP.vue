<template>
  <v-card>
    <v-app-bar
      dark
      height="200px"
      color="#04B640"
      style="border-radius: 0px 0px 125px 125px"
    >
      <v-toolbar-title
        style="margin-left: 30px; padding: auto"
        class="text-h5 justify-center"
        >โปรไฟล์ครัวเรือน</v-toolbar-title
      >
    </v-app-bar>
    
        <v-icon
          color="#08782E"
          class="mr-5"
          x-large
          @click="backmain"
        >
          mdi-arrow-left
        </v-icon>
     
    <v-container>
      <v-row dense>
        <v-col cols="12" class="mgt">
          <v-card color="#C0FCB0" class="pa-4 text-no-wrap rounded-xl mb-6">
            <div class="d-flex align-center">
              <div class="col-12">
                <v-card-text class="text--primary">
                  <div>
                    <p class="font-weight-bold">
                      ผู้ขอรับบริการ : {{ pfpeople.namepeople }}
                    </p>

                    <p class="font-weight-bold">
                      โทรศัพท์ : {{ pfpeople.telpeople }}
                    </p>
                  </div>
                </v-card-text>
              </div>
            </div>
          </v-card>
          </v-col>

<v-col cols="12" class="mt-1">
          <v-card color="#C0FCB0" class="pa-4 text-no-wrap rounded-xl mb-6" @click="selectadd">
            <div class="d-flex align-center ">
              <div class="col-12">
                <v-card-text class="text--primary">
                  <div>
                    <p class="font-weight-bold">
                      ชื่อและประเภทอาคาร : {{ addpeople.buildtype }}
                    </p>
                    <p class="font-weight-bold">
              
                      ที่อยู่ {{addpeople.addpeople}} ตำบล {{addpeople.subarea}} อำเภอ {{addpeople.area}} 
                      จังหวัด {{addpeople.province}} {{addpeople.postalcode}}
                    </p>
                   
                  </div>
                </v-card-text>
              </div>
            </div>
          </v-card>
          </v-col>

         <v-col cols="12" class="mgt ">
          <v-card color="#C0FCB0"  class=" rounded-xl">
            <div class="d-flex justify-center mb-6">
                
                
                <v-card-title class=" text-h4  mb-15 mt-15">
                  เปลี่ยนรหัสผ่าน
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
  data() {
    return {
      pfpeople: {
        namepeople: "ฟ้า เอบีซี",  
        telpeople: "065-6588598",
      },
      addpeople:{
        buildtype: "บ้านเดี่ยว",
        addpeople: "159 ม.4 ",
        subarea: "สันทรายหลวง",
        area: "สันทราย",
        province: "เชียงใหม่",
        postalcode: "58000",
      },
    };
  },
  methods: {
    selectadd(){
      this.$router.push("/selectadd")
    },
    backmain(){
      this.$router.push("/")
    },
  }
};
</script>
