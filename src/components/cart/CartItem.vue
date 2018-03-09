<template>
    <v-flex xs12>

            <v-container fluid grid-list-lg>
                <v-layout row>
                    <v-flex sm4 xs12>
                        <v-card-media :src=item.image height="125px" contain></v-card-media>
                    </v-flex>
                    <v-flex sm4 xs12>
                        <div>
                            <div class="headline">{{item.name}}</div>
                            <div></div>
                        </div>
                    </v-flex>
                    <v-flex sm2 xs6>
                        <div>{{item.price}}</div>
                    </v-flex>
                    <v-flex sm2 xs6>
                        <div>1</div>
                    </v-flex>
                </v-layout>
            </v-container>
        <v-divider></v-divider>
    </v-flex>
</template>

<script>
export default {
  props: ['item'],
};
</script>

