my $line = 1;
my $data;

while ($data = <STDIN>)
{
	$data =~ s/\&/\&amp;/g;
	$data =~ s/</\&lt;/g;
	$data =~ s/>/\&gt;/g;
	print qq!<span class="line">!,
		sprintf("%2d", $line),
		qq!</span>&nbsp;$data!;
	$line++;
}

