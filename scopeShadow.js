function foo()
{
    var bar;
	quux=1;
        (function zip()
        {
                var quux=2;
                console.log(quux);
        })();

}

foo();
console.log(quux);