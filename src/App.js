import Header from "./components/Header";
import Navbar from "@acto/react-navbar";
import Logo from "./images/logo.png";
import AboutMe from "./images/AboutMe.jpeg";
import Home from "@material-ui/icons/Home";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import School from "@material-ui/icons/School";
import ReactTypingEffect from "react-typing-effect";
import HighlightCard from "./components/HighlightCard";

const navBrand = <img src={Logo} alt="Logo" height="40px"></img>;

const leftLinks = (
	<>
		<a href="#header">
			<Home style={{ verticalAlign: "middle" }} /> Home
		</a>
		<a href="#null">
			<DesktopMacIcon style={{ verticalAlign: "middle" }} /> Computer Science
		</a>
		<a href="#null">
			<School style={{ verticalAlign: "middle" }} /> Education
		</a>
		<a href="#null">Other</a>
	</>
);

const typewriter = (
	<ReactTypingEffect
		className="typewriter"
		text={[
			"Salutations, I am Richard, an undergraduate student researcher at Georgia Tech College of Computing.",
			"Welcome to my personal website.",
			"I hope you find something interesting here!",
		]}
		speed="90"
		eraseSpeed="20"
	/>
);

function App() {
	return (
		<div>
			<Navbar brand={navBrand} leftLinks={leftLinks} shouldAnimate={true} shouldHideOnScroll={false} />
			<Header caption="Richard Luo's Website" subtitle="Making Dreams Come True Since 2002"></Header>
			<HighlightCard
				typewriter={typewriter}
				title="About Me"
				text="👋 Hi there! I’m Richard, an undergraduate student researcher at Georgia Tech's College of Computing with a broad range of interests. Currently, I'm pursuing a B.S. in Computer Science from Georgia Tech, and at GT, I'm part of The Agency (ML Club), GreyHat (Cybersecurity Club), and CSA. If you're interested in working with me, feel free to shoot me a message!				"
				alt="Picture of Me"
				imageSrc={AboutMe}
			></HighlightCard>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo erat sit amet convallis
				pulvinar. Phasellus ipsum elit, efficitur sit amet vulputate eu, feugiat nec est. Sed nec ex id enim
				blandit sagittis id id dui. Etiam et consectetur mauris. Quisque quis ante elementum, semper justo a,
				sagittis mauris. Nunc nunc tellus, laoreet in odio in, ultrices consectetur metus. Donec nisi ex,
				vehicula vel mauris sit amet, pretium bibendum nulla. Fusce dignissim, dui at pretium porttitor, est
				dolor volutpat nisi, non porta mauris magna eget leo. Vivamus in ante suscipit, bibendum tellus a,
				condimentum ante. Praesent feugiat arcu vitae lorem pulvinar aliquet. Donec nec diam ipsum. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tellus metus,
				scelerisque nec diam vitae, interdum finibus leo. Phasellus facilisis non felis ac tincidunt. Cras
				sollicitudin congue odio et luctus. Mauris congue blandit risus quis euismod. Etiam ultrices tempus
				pretium. Pellentesque eleifend enim et eros luctus ultrices. Suspendisse eget egestas nisl. Vestibulum
				id arcu posuere, vehicula enim eu, scelerisque massa. Duis vehicula lacinia nulla at aliquet. Donec
				eleifend tincidunt purus. Integer at varius dui. Donec id enim a sem volutpat finibus ut id sem. Mauris
				malesuada odio eu fermentum bibendum. Nulla facilisi. Vestibulum sodales tempus rhoncus. Ut lacus
				lectus, convallis vel nibh ut, imperdiet aliquam ipsum. Aenean interdum sem magna, sit amet semper elit
				commodo vitae. Integer congue efficitur mauris eu vestibulum. Nullam posuere augue nec nulla feugiat,
				sit amet accumsan felis cursus. Proin consequat varius ex, non tempor arcu bibendum sit amet. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie purus in lacus maximus, et suscipit
				nunc commodo. Ut eu sapien vel purus luctus tristique. Phasellus quis tellus in est porta malesuada.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				Pellentesque sapien lorem, lacinia at semper vel, mollis at lorem. Morbi nisi sapien, placerat eget
				aliquet nec, faucibus in ligula. Morbi iaculis tellus et tincidunt sodales. Sed dui risus, mattis nec
				fermentum venenatis, rutrum quis elit. Morbi eu viverra metus. Nam ut rhoncus sem. Sed ut euismod nunc.
				Donec fermentum faucibus scelerisque. Proin rhoncus tortor quis ante maximus, sit amet facilisis lacus
				egestas. Nunc sem nulla, pretium ut volutpat id, venenatis at erat. Mauris molestie odio at laoreet
				tincidunt. Suspendisse posuere ullamcorper varius. Nunc at dapibus nibh. Sed facilisis urna sapien, id
				tristique enim laoreet ut. Sed a dictum odio. Nam lectus diam, aliquet sed risus interdum, mattis
				faucibus erat. Sed vehicula est vel lacus tristique, cursus molestie dolor rutrum. Ut suscipit, ante ut
				faucibus ullamcorper, tortor ante fermentum lectus, non sagittis ligula sem nec ante. Curabitur posuere
				elementum libero, in imperdiet ipsum auctor sit amet. Ut sed tellus fermentum, dapibus ligula ut,
				euismod purus. Vestibulum consectetur suscipit feugiat. Nulla vel venenatis ex, eu faucibus quam. Sed
				dapibus venenatis consequat. Quisque semper libero nec tellus hendrerit, sed congue erat sollicitudin.
				Ut varius metus nisi, sed viverra ante ultricies et. Mauris quis nibh finibus, iaculis nunc vitae,
				commodo nibh. Praesent semper lacinia imperdiet. Aenean erat mi, feugiat ut placerat nec, sagittis at
				nisi. Praesent vestibulum tincidunt nisl ac lacinia. Praesent dignissim luctus metus, dapibus rhoncus
				leo malesuada quis. Maecenas aliquet erat ultricies erat accumsan rhoncus. Maecenas pretium vulputate
				sodales. Donec feugiat convallis laoreet. Quisque ut eleifend turpis, et efficitur nulla. Nullam
				malesuada elementum mauris. Nam facilisis varius neque et feugiat. Praesent magna tortor, maximus vitae
				risus in, egestas laoreet ligula. In at viverra ipsum. Vivamus iaculis volutpat massa et feugiat.
				Suspendisse dapibus ipsum eu luctus blandit. In et libero consectetur, rhoncus ipsum eu, convallis est.
				Vivamus congue libero nec tellus dictum imperdiet. Morbi magna quam, dignissim ornare eros eget,
				imperdiet hendrerit purus. Sed vitae odio ornare metus aliquam commodo. Curabitur faucibus sapien nec
				tempus imperdiet. Donec convallis non libero quis placerat. Vestibulum sed turpis tincidunt, commodo
				tellus ut, tristique sapien. Phasellus blandit fermentum ligula at mattis. Nunc mollis orci quis purus
				vestibulum volutpat. Proin libero dolor, fermentum non lacus sed, porta consectetur magna. Quisque
				condimentum mi sem, id eleifend lorem rutrum eget. Integer vehicula maximus eros, id volutpat purus
				rhoncus eu. Sed vel consequat ipsum. Curabitur eleifend viverra tristique. Etiam rhoncus eu est sed
				ornare. Sed maximus, ex non luctus mollis, ante eros dapibus turpis, et gravida est lorem non elit.
				Phasellus id dignissim diam. Aliquam quis est at felis sollicitudin tristique. In non euismod dolor, nec
				finibus mi. Duis mi ante, suscipit vel enim accumsan, laoreet rhoncus libero. In sodales a felis vel
				efficitur. Aenean ullamcorper massa non justo luctus sodales. Fusce suscipit justo id velit vestibulum,
				sit amet ornare turpis maximus. In hac habitasse platea dictumst. Aenean pharetra in felis eget
				faucibus. Etiam porttitor enim quis est dignissim molestie. In et mi et odio sagittis consectetur vel ut
				orci. Curabitur ullamcorper dolor congue, semper nibh nec, volutpat nunc. Curabitur sit amet enim
				varius, tristique odio in, fringilla mi. In tempus dui id nunc eleifend mollis. Nulla sit amet nibh
				suscipit, laoreet dui nec, consequat diam. Pellentesque cursus, urna a bibendum egestas, sapien odio
				lobortis augue, et blandit neque turpis non diam. Vestibulum rutrum ut mi sit amet cursus. Pellentesque
				ut cursus urna. Cras id massa ut elit gravida auctor ut sit amet nulla. Sed imperdiet dapibus nunc, a
				sollicitudin ante lacinia a. Duis enim arcu, suscipit in tristique eu, euismod sed augue. Aliquam elit
				orci, eleifend quis tempor quis, facilisis vitae enim. Pellentesque viverra blandit mi, sit amet
				eleifend dui ultricies et. Morbi porttitor, urna non blandit pretium, est nunc molestie velit, ut dictum
				leo nisl vel leo. Pellentesque ullamcorper commodo felis, id rhoncus felis convallis vel. Vivamus dictum
				sed quam id tempus. Mauris sed porttitor neque. Nunc imperdiet nunc non rhoncus blandit. Sed ut nisi at
				augue hendrerit convallis id non ex. Quisque tempus felis eu arcu interdum dapibus. Pellentesque vitae
				tempus lectus. Mauris hendrerit maximus rhoncus. Etiam vitae purus neque. Maecenas nec bibendum neque.
				Vivamus egestas nisi gravida sem tincidunt, nec fringilla dolor sagittis. Sed vehicula orci eget lectus
				vehicula, a tristique nibh volutpat. Duis efficitur ornare justo, eget vestibulum lorem consequat id.
				Etiam neque magna, porttitor nec metus nec, varius imperdiet nibh. Etiam luctus sapien sit amet ante
				mattis, a cursus orci ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				posuere cubilia curae; Integer erat ex, imperdiet quis leo nec, ultricies ornare ipsum. Sed pellentesque
				tortor et felis elementum feugiat. Fusce orci tortor, gravida nec aliquam sed, dignissim non erat.
				Praesent sit amet malesuada mauris. Nulla eleifend ultrices ex ut maximus. Sed leo risus, condimentum ac
				efficitur sed, tristique et lacus. Vivamus egestas tincidunt nisi in egestas. Ut at nisl vehicula justo
				eleifend pharetra nec id tortor. Aliquam rhoncus odio et odio finibus pharetra. Fusce malesuada velit
				eget lorem sodales, id sagittis velit scelerisque. Morbi in lorem sed libero efficitur vestibulum. Fusce
				non nisl vel mi congue ultricies. Vivamus commodo venenatis rhoncus. Sed ac dolor mollis, rhoncus nulla
				sed, aliquam nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
				curae; Donec interdum commodo enim et varius. Vivamus interdum tortor massa, nec ultricies massa mattis
				vitae. Cras scelerisque nec lacus nec mattis. Morbi hendrerit ex nec erat gravida, tincidunt vehicula
				dui ornare. Vestibulum malesuada lectus nec luctus varius. Aenean ac massa augue. Duis sodales, lorem
				vitae efficitur gravida, arcu libero tincidunt lectus, quis ultricies nisi est sit amet nisi. Fusce et
				ligula ut tellus cursus aliquet blandit sodales velit. Nam varius, odio sit amet sagittis volutpat,
				lacus est gravida risus, ut consectetur erat eros a felis. Etiam ullamcorper sem a leo malesuada
				convallis at nec dolor. Pellentesque auctor est tortor, eu blandit lacus viverra id. Sed condimentum
				felis at massa volutpat, eget malesuada libero sollicitudin. In eget libero eu augue fringilla consequat
				a sit amet dui. Integer tristique pellentesque sem. Mauris porttitor nisi in sodales cursus. Aliquam in
				dui magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem nulla, euismod sed
				mattis vel, aliquam eu enim. Praesent sagittis est ac ex semper ultricies. Cras purus urna, gravida sit
				amet lacinia eget, ultrices sed turpis. Nunc elit ipsum, fringilla egestas cursus luctus, elementum nec
				enim. Curabitur aliquet non est at tempus. Duis ut pretium elit, sed efficitur purus. Cras in odio in
				nulla posuere tincidunt gravida ac turpis. Proin malesuada enim libero, sed viverra nulla tristique non.
				Nullam convallis nisi a purus vehicula, nec lacinia risus mattis. Praesent lectus ligula, iaculis a
				velit eu, eleifend finibus velit. Vivamus gravida ligula vitae felis dapibus rutrum at eget lectus.
				Suspendisse lacus justo, molestie sit amet rutrum consectetur, egestas sed quam. Nulla vel velit ipsum.
				Suspendisse nec commodo elit. Sed ac eleifend mauris. Nam turpis libero, pulvinar vel pulvinar ac,
				porttitor in erat. In sit amet nunc a augue ornare consectetur. Aliquam non urna non leo suscipit
				dapibus in eget erat. Morbi imperdiet maximus ipsum, vel rutrum urna venenatis vitae. Sed non lorem
				enim. Suspendisse non ligula tortor. Nulla rhoncus sapien leo, sit amet pretium eros pulvinar quis.
				Donec efficitur vel justo ac malesuada. Donec posuere sollicitudin ex non auctor. Donec elementum
				tristique quam eget laoreet. Suspendisse scelerisque tortor molestie, sagittis justo quis, euismod nisi.
				Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam
				blandit orci id ullamcorper rutrum. Ut aliquet posuere feugiat. Integer tincidunt dignissim felis.
				Quisque eget nunc nec nunc porta ullamcorper. Fusce tincidunt urna ut turpis interdum, sed venenatis
				neque faucibus. Mauris elit ante, volutpat ac lacinia id, congue et metus. Morbi sit amet feugiat eros.
				Nunc non libero ac diam rhoncus sollicitudin nec sed lectus. Sed vitae laoreet eros. Mauris nec faucibus
				erat, in mattis orci. Donec posuere sem orci, quis rutrum est maximus vel. Nullam ut ligula ligula. Nunc
				cursus nisl laoreet vehicula tempor. Proin vitae dolor in ipsum varius faucibus. Nunc condimentum
				dignissim ligula, ut pretium nisl volutpat ut. Etiam a augue mi. In porta vestibulum eros, pretium
				laoreet diam hendrerit sagittis. In gravida justo ut ex posuere, a imperdiet nisl pretium. Phasellus
				venenatis est vel sapien condimentum pretium. Nunc porttitor ligula non vestibulum ultrices. Aenean quis
				rhoncus sem, sed congue nisi. Nunc suscipit, tortor a posuere pretium, mi leo porta felis, at
				ullamcorper tellus elit non erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
				urna vitae ex aliquam ullamcorper. Mauris est erat, semper a tortor eu, pharetra imperdiet felis.
				Vivamus ornare aliquam lorem volutpat tempus. Sed in lectus dapibus, faucibus mauris non, lacinia quam.
				Nam aliquet felis augue, vel pellentesque purus rhoncus pulvinar. Sed pretium orci et finibus tincidunt.
				Ut in posuere est, id malesuada nisl. Pellentesque quis faucibus turpis. Etiam faucibus felis non
				ultricies tempus. Donec sollicitudin consectetur dolor sit amet porttitor. Aliquam pellentesque, eros a
				pharetra venenatis, est nunc aliquet nunc, eu ullamcorper ipsum augue vel felis. Aliquam eget vestibulum
				velit. Nullam eu orci ullamcorper nisi condimentum hendrerit ut id magna. Vestibulum sollicitudin sem ut
				leo hendrerit congue. Pellentesque efficitur ligula at turpis molestie vulputate. Maecenas quis pharetra
				odio. Donec non mauris posuere, sodales tortor et, vulputate augue. Aliquam consectetur porta ultricies.
				Nam eu nunc ligula. Fusce at dictum nibh. Pellentesque ornare nisi et neque sodales luctus. Vivamus
				commodo metus diam, id bibendum sem finibus ut.
			</p>
		</div>
	);
}

export default App;
