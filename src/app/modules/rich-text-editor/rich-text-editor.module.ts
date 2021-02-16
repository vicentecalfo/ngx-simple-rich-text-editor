import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';

@NgModule({
	providers: [ { provide: 'Window', useValue: window } ],
	declarations: [ RichTextEditorComponent ],
	imports: [ CommonModule ],
	exports: [ RichTextEditorComponent ]
})
export class RichTextEditorModule {}
