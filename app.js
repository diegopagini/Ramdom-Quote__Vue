new Vue({
  el: '#app',

  data() {
    return {
      quotes: [
        {
          quote: 'Eighty percent of success is showing up.',
          author: '- Woody Allen'
        },
        {
          quote: 'Start where you are. Use what you have. Do what you can.',
          author: '- Arthur Ashe'
        },
        {
          quote: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
          author: '- Ann Landers'
        },
        {
          quote: 'You can’t use up creativity. The more you use, the more you have.',
          author: '- Maya Angelou'
        },
        {
          quote: 'We must balance conspicuous consumption with conscious capitalism.',
          author: '- Kevin Kruse'
        },
        {
          quote: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
          author: '- Johann Wolfgang von Goethe'
        },
        {
          quote: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
          author: '- Jamie Paolinetti'
        },
        {
          quote: 'It’s not the years in your life that count. It’s the life in your years.',
          author: '- Abraham Lincoln'
        },
        {
          quote: 'The two most important days in your life are the day you are born and the day you find out why.',
          author: '- Mark Twain'
        },
        {
          quote: 'The question isn’t who is going to let me; it’s who is going to stop me.',
          author: '- Ayn Rand'
        },
        {
          quote: 'Build your own dreams, or someone else will hire you to build theirs.',
          author: '- Farrah Gray'
        },
        {
          quote: 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
          author: '- Jesus'
        },
        {
          quote: 'Certain things catch your eye, but pursue only those that capture the heart.',
          author: '- Ancient Indian Proverb'
        },
        {
          quote: 'I would rather die of passion than of boredom.',
          author: '- Vincent van Gogh'
        },
        {
          quote: 'Life is what happens to you while you’re busy making other plans.',
          author: '- John Lennon'
        },
      ]
    }
  },

  computed: {
    showQuote: function() {
      return this.quotes
    }
  },

  methods: {
    newQuote() {
      acc = 0;
      const showNext = {
        quote: this.quotes[acc],
        author: this.author[acc]
      }
      acc++;
    }
  }

});