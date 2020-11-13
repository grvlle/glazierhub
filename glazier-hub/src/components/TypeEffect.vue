<template>
    <h1 style="white-space: pre;">{{ goCode }}
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h1>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['fun', 'awesome', 'a journey', 'life'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0,
        goCode: `func (k *Kademlia) IterativeFindNode(target NodeID, delta int, final chan) {
	done := make(chan Contacts)

	ret := make(Contacts, BucketSize)
	frontier := make(Contacts, BucketSize)
	seen := make(map[string]struct{})

	pending := 0
	for i := 0; i < delta && frontier.Len() > 0; i++ {
		pending++
		contact := heap.Pop(&frontier).(Contact)
		go k.FindNode(contact, target, done)
	}

		for pending < delta && frontier.Len() > 0 {
			pending++
			contact := heap.Pop(&frontier).(Contact)
			go k.FindNode(contact, target, done)
		}
	}

	sort.Sort(ret)
	if ret.Len() > BucketSize {
		ret = ret[:BucketSize]
	}

	final <-`
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap");



  h1 {
    font-family: 'Fira Code';
    font-size: 0.7rem;
    font-weight: normal;
    padding: 20px;

    span.typed-text {
      color: #8dd9ff;
    }

    span.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
      animation: none;
    }
  }

  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>