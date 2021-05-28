<template>
  <div class="home">
    <aside>
      <div class="action-container">
        <Button label="Shuffle" @shuffle-event="shuffle" eventAction="shuffleEvent" />
        <Button label="Sort" @sort-event="sort" eventAction="sortEvent" />
      </div>
    </aside>
    <div class="panel">
      <div class="card-container">
        <Card
          v-for="card in cards"
          :key="card"
          :value="card"
          :bg-color="'color-var--' + getRandomColorCode()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Button,
    Card
  },
  data() {
    return {
      cards: [] as number[],
      cardLength: 9
    };
  },
  methods: {
    initializeCards() {
      let i = 1;
      while (i <= this.cardLength) {
        this.cards.push(i);
        i++;
      }
    },
    getRandomColorCode(): number {
      return (Math.floor(Math.random() * 10) % 4) + 1;
    },
    shuffle(): void {
      if (this.cardLength < 100) {
        this.cards.sort(() => Math.random() - 0.5);
      } else {
        let currentIndex = this.cardLength;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
      }
    },
    sort(): void {
      this.cards.sort();
    }
  },
  mounted() {
    this.initializeCards();
  }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  aside {
    width: 100%;
    .action-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .panel {
    width: 100%;
    .card-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @include media-desktop {
    padding: 0;
    .panel {
      width: 75%;
      order: 1;
    }
    aside {
      width: 25%;
      order: 2;
    }
  }
}
</style>
