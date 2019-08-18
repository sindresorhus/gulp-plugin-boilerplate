import path from 'path';
import test from 'ava';
import Vinyl from 'vinyl';
import pEvent from 'p-event';
import plugin from '.';

test('main', async t => {
	const stream = plugin();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		base: __dirname,
		path: path.join(__dirname, 'file.ext'),
		contents: Buffer.from('unicorns')
	}));

	const file = await promise;
	t.is(file.contents.toString(), 'unicorns');
});
