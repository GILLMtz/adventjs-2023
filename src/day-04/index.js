export   function decode(message) {
        return [1, 2].reduce((acc) =>
          acc.replaceAll(/(\([^()]*\))/g, (match) =>
            match.split('').slice(1, -1).reverse().join('')), message);
}