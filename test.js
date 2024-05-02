import path from 'node:path';
import test from 'ava';
import Vinyl from 'vinyl';
import {pEvent} from 'p-event';
import plugin from './index.js';

test('main', async t => {
	const stream = plugin();
	const promise = pEvent(stream, 'data');

	stream.end(new Vinyl({
		base: import.meta.dirname,
		path: path.join(import.meta.dirname, 'file.ext'),
		contents: Buffer.from('unicorns'),
	}));

	const file = await promise;
	t.is(file.contents.toString(), 'unicorns');
});
