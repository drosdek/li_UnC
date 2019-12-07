import { Component } from "@angular/core";
import { Local } from "../repository/locais.repository";
import { Campus } from "../repository/campus.repository";

@Component({
	selector: 'info-widget',
	templateUrl: 'info.widget.html'
})

export class InfoWidget { 
	private campus: Campus = new Campus(
		"Testazera",
		"Misuaba"
	)
	private local: Local = new Local(
		"teste",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis vehicula rutrum. Vivamus sed euismod eros. Pellentesque dapibus, eros a dignissim accumsan, ligula erat mattis nisi, ornare vestibulum dui turpis et ligula. Vestibulum ultricies in metus non viverra. Nam ornare ullamcorper tempus. Nam leo mauris, ullamcorper sit amet laoreet sit amet, semper id massa. Nulla facilisi. Donec mattis iaculis nisl, ut varius nibh sollicitudin et. Nulla ac iaculis lectus. Proin lacus lacus, dictum nec odio quis, pharetra hendrerit metus. Aliquam non nisl facilisis, viverra mi ut, vehicula magna. Maecenas posuere est eget justo bibendum finibus. Mauris at fermentum magna, ut imperdiet ligula. Cras lacinia purus hendrerit nisl interdum, ac feugiat sapien maximus. AQUI E O FIM PARAGRAFO 1.\
		\
		Cras rhoncus rutrum ligula, vel scelerisque odio maximus ac. Etiam a sem felis. Ut semper, ipsum nec lobortis condimentum, ipsum enim faucibus dui, nec ornare tellus metus nec turpis. Nam sed neque nec mauris porta euismod. Donec sit amet risus iaculis, fringilla nulla eu, porttitor nunc. Nullam at metus non dolor consequat blandit. Sed ultricies sem nunc, in viverra leo aliquam ac. Duis interdum arcu ante, eget dapibus turpis tristique sit amet.\
		\
		Cras lacinia vehicula sagittis. Aliquam erat volutpat. Ut in tellus et nunc faucibus fringilla. Phasellus aliquam sit amet turpis nec faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis ac orci sit amet lacinia. Suspendisse et ullamcorper ipsum. Mauris molestie congue est, ac venenatis magna sodales in. Donec commodo eros nec pretium euismod. Nunc quis lacus faucibus lacus condimentum eleifend.\
		\
		Aenean pellentesque pulvinar tortor at accumsan. Nunc ac metus id nisi rutrum blandit. Ut blandit ex dolor, at elementum orci vestibulum non. Sed laoreet a nisl sit amet porta. Maecenas in augue eleifend, maximus orci ut, aliquet sem. Cras eu neque quis ligula congue tincidunt sit amet consectetur risus. Integer facilisis justo orci, lacinia condimentum enim posuere ut. Etiam quis diam vel quam posuere vulputate. Mauris rutrum ex quis mauris rhoncus euismod. Aliquam erat volutpat.\
		\
		Vivamus ac tellus mauris. Nunc mattis tortor vel efficitur porttitor. Curabitur lacinia scelerisque tellus, id interdum metus sollicitudin quis. Nam congue in ex vel elementum. Etiam et mi in massa dignissim pretium ut vitae velit. Phasellus et elit vitae nisl placerat fermentum. Aenean consequat non orci in sodales. Quisque dictum euismod consectetur. Nullam dignissim metus odio, varius tincidunt mauris volutpat sagittis. Quisque placerat suscipit euismod. Suspendisse sed purus ac elit vulputate ultricies id sed dolor.\
		\
		Phasellus vulputate ipsum eget tortor tincidunt tincidunt. Nullam dapibus posuere mauris viverra viverra. Praesent eleifend diam ultricies diam dapibus, eu sollicitudin est rutrum. Aliquam ac elementum purus. Aenean sed pulvinar dui. Maecenas a nibh massa. Mauris ut dui eget felis pharetra lobortis pulvinar iaculis eros. Duis ac ex vitae velit egestas rhoncus nec nec dui. Vestibulum vitae orci elit. Phasellus a arcu nunc. Suspendisse venenatis mi sit amet eros sagittis dapibus. Ut dictum tellus ut nisi volutpat porttitor.\
		\
		Nunc feugiat tellus ac lectus faucibus, eu dapibus diam aliquet. Mauris vestibulum dolor quis purus aliquet tristique. Cras placerat aliquam viverra. Nullam et condimentum diam. Morbi in mollis sapien, sit amet cursus metus. Suspendisse suscipit risus sit amet tempus lobortis. Donec iaculis pellentesque diam eu commodo. Integer aliquam elementum ligula, eget rhoncus nisl elementum vitae.\
		\
		Quisque facilisis elit vel nulla suscipit cursus. Morbi dignissim arcu dolor, eget venenatis mauris iaculis a. Nullam consequat pellentesque risus, id molestie ante vulputate vel. Donec at quam condimentum, imperdiet nulla efficitur, facilisis dui. Phasellus ut nulla eget metus posuere consectetur. Maecenas iaculis egestas sollicitudin. In hac habitasse platea dictumst. Sed mi odio, rutrum eget libero et, semper congue metus.\
		\
		Phasellus ullamcorper sit amet tortor a feugiat. Nam non varius leo, sed malesuada augue. Suspendisse cursus dictum dolor sed vehicula. Nulla interdum non odio non pretium. Nunc tempor vel ligula a lacinia. Nullam tincidunt, erat vitae laoreet volutpat, magna turpis ornare orci, sit amet auctor turpis metus pharetra arcu. Nullam interdum facilisis elementum. Morbi a orci vel dui vestibulum fringilla eu ac libero. Mauris ex arcu, pellentesque vel leo nec, volutpat ultrices leo. Nam pellentesque ullamcorper nisi ut elementum. Aliquam mattis, magna vitae tristique facilisis, augue augue semper quam, vel elementum nisl quam ut sapien. Vestibulum eget nisl et ipsum semper pharetra eget id tortor. Nam tristique ullamcorper lacinia. Nulla consequat justo ut orci tempor, et consectetur orci blandit. Duis tincidunt scelerisque justo, quis ornare sem scelerisque sit amet. Aenean ultricies congue nisi eu tristique.\
		\
		Proin nunc justo, tristique eget dictum ac, congue et libero. Vestibulum urna arcu, interdum ac purus vel, tristique auctor odio. Donec vitae arcu sed dolor elementum aliquet. Praesent eget arcu nec nulla pharetra cursus. Praesent bibendum vestibulum elit, at porta nisl laoreet laoreet. Aenean tincidunt iaculis sem molestie bibendum. Duis in posuere augue. Aliquam tempor fermentum justo. Vestibulum fringilla, massa nec vehicula congue, justo justo viverra diam, vitae viverra eros ligula non velit. Nullam risus metus, malesuada at condimentum nec, tincidunt nec nibh. Pellentesque dapibus, felis aliquam pulvinar auctor, velit odio mattis sapien, sit amet ornare magna massa a justo. Vivamus sollicitudin feugiat tortor. Etiam vitae dolor mi. Etiam tincidunt scelerisque ipsum. Morbi commodo urna turpis, in dapibus felis dapibus hendrerit. ",
		""
		
	)	
}